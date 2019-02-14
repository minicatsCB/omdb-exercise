const baseUrl = "http://www.omdbapi.com/?apikey=";
const apiKey = "yourApiKey";

document.getElementById("search-movie-form").addEventListener("submit", searchMovie);
document.getElementById("movies").addEventListener("click", applyActionOnMovie);

function requestData(url) {
    return fetch(url).then(response => {
        if(response.ok) {
            return response.json().then(data => {
                return Promise.resolve(data);
            });
        } else {
            return Promise.reject(response.status);
        }
    });
}

function applyActionOnMovie(ev) {
    let action = ev.target.getAttribute("itemprop");
    let movieKey = ev.target.parentElement.parentElement.dataset.key;
    switch (action) {
        case "details":
            console.log("Toggle movie details:", movieKey);
            getMovieById(movieKey).then(movie => {
                showDetailsInView(movie);
            });
            break;
        case "edit":
            console.log("Edit movie:", movieKey);
            // Lock the toggle details view button while editing
            let detailsButton = document.querySelector('[itemprop="details"]').setAttribute("disabled", "true");
            // Open the details view if it isn't already opened
            getMovieById(movieKey).then(movie => {
                let movieElement = document.getElementById(movie.key);
                if(!movieElement.classList.contains("details-expanded")){
                    movieElement.classList.add("details-expanded");
                    let detailsTemplate = replaceNullData `${createDetailTemplate(movie.val())}`;
                    movieElement.insertAdjacentHTML('beforeend', detailsTemplate);
                }

                enableInputsInMovie(movieKey);
                ev.target.lastElementChild.innerText = "Save changes";
                ev.target.setAttribute("itemprop", "save");
                ev.target.classList.remove("btn-light");
                ev.target.classList.add("btn-success");
            });
            break;
        case "save":
            console.log("Save changes in movie: ", movieKey);
            disableInputsInMovie(movieKey);
            ev.target.lastElementChild.innerText = "Edit";
            ev.target.setAttribute("itemprop", "edit");
            saveChangesInMovie(movieKey).then(() => {
                ev.target.classList.remove("btn-success");
                ev.target.classList.add("btn-light");
                // Unlock the toggle details view button after saving the changes
                document.querySelector('[itemprop="details"]').removeAttribute("disabled");
            });
            break;
        case "delete":
            console.log("Delete movie:", movieKey);
            database.ref().child("movies").child(movieKey).remove();
            break;
        default:
            console.log("Action no available");
            break;
    }
}

function enableInputsInMovie(movieKey) {
    let movieElement = document.getElementById(movieKey);
    let inputs = movieElement.getElementsByTagName("textarea");
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].removeAttribute("disabled");
    }
}

function disableInputsInMovie(movieKey) {
    let movieElement = document.getElementById(movieKey);
    let inputs = movieElement.getElementsByTagName("textarea");
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].setAttribute("disabled", "true");
    }
}

function saveChangesInMovie(movieKey) {
    let changedData = getChangedData(movieKey);
    return database.ref().child("movies").child(movieKey).update(changedData);
}

function getChangedData(movieKey){
    let data = {
      "Awards": "",
      "Country": "",
      "Director": "",
      "Genre": "",
      "Language": "",
      "Plot": "",
      "Rated": "",
      "Released": "",
      "Runtime": "",
      "imdbRating": ""
    };

    let movieElement = document.getElementById(movieKey);
    let inputs = movieElement.getElementsByTagName("textarea");
    for (let i = 0; i < inputs.length; i++) {
        let itemProp = inputs[i].getAttribute("itemprop");
        data[itemProp] = inputs[i].value;
    }
    
    return data;
}

function showDetailsInView(movie) {
    let movieElement = document.getElementById(movie.key);
    if(!movieElement.classList.contains("details-expanded")){
        movieElement.classList.add("details-expanded");
        let detailsTemplate = replaceNullData `${createDetailTemplate(movie.val())}`;
        movieElement.insertAdjacentHTML('beforeend', detailsTemplate);
    } else {
        movieElement.classList.remove("details-expanded");
        movieElement.lastElementChild.remove();
    }
}

function deleteMovieFromView(movie) {
    document.getElementById(movie.key).remove();
}

function searchMovie(ev){
    let title = ev.target["0"].value;
    let url = baseUrl + apiKey + "&t=" + title;
    requestData(url).then(saveMovie);
    ev.preventDefault();
}

function showMovieInView(movie) {
    let movieElement = document.getElementById("movies");
    let movieTemplate = replaceNullData `${createMasterTemplate(movie.key, movie.val())}`;
    movieElement.insertAdjacentHTML('beforeend', movieTemplate);
}

function replaceNullData(strings, ...parts) {
    var checkedMarkup = "";
    parts.forEach((part, index) => {
        if (!part) {
            part = "data not available";
        }

        checkedMarkup += strings[index] + part;
    });

    return checkedMarkup + strings[strings.length - 1];
}

function saveMovie(movie) {
    checkMovieExists(movie.Title).then(movieExists => {
        if(movieExists) {
            console.log("Cannot add the movie. The movie already exists in the database.");
        } else {
            let data = {
              "Title": "",
              "Poster": "",
              "Awards" : "",
              "Country" : "",
              "Director" : "",
              "Genre" : "",
              "Language" : "",
              "Plot" : "",
              "Rated" : "",
              "Released" : "",
              "Runtime" : "",
              "imdbRating" : ""
            };
            for (prop in data) {
                data[prop] = movie[prop];
            }
            console.log("Adding movie to the database.");
            database.ref().child("movies").push(data);
        }
    });
}

function checkMovieExists(title) {
    let movieExists = false;
    return database.ref().child("movies")
        .orderByChild("Title")
        .equalTo(title)
        .once("value")
        .then(snapshot => {
            snapshot.forEach((childSnapshot) => {
                // If a movie was returned, then we know it already exists in the database
                movieExists = true;
            });

            return movieExists;
    });
}

function getAllMovies() {
    let movies = [];
    return database.ref().child("movies")
        .once("value")
        .then(snapshot => {
            snapshot.forEach((childSnapshot) => {
                movies.push(childSnapshot);
            });
            
            return movies;
        });
}

function getMovieById(movieKey) {
    let movie;
    return database.ref().child("movies")
        .once("value")
        .then(snapshot => {
            snapshot.forEach((childSnapshot) => {
                if(childSnapshot.key === movieKey) {
                    movie = childSnapshot;
                }
            });

            return movie;
        });
}

function addDatabaseListeners() {
    database.ref().child("movies").on('child_added', showMovieInView);
    database.ref().child("movies").on('child_removed', deleteMovieFromView);
}

function initDatabase() {
    var config = {
        apiKey: "yourApiKey",
        authDomain: "yourAuthDomain",
        databaseURL: "yourDatabaseURL",
        projectId: "yourProjectId",
        storageBucket: "yourStorageBucket",
        messagingSenderId: "yourMessagingSenderId"

    };
    firebase.initializeApp(config);

    return firebase.database();
}

let database = initDatabase();
addDatabaseListeners();
