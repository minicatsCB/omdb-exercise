const baseUrl = "http://www.omdbapi.com/?apikey=";
const apiKey = "yourApiKey";

document.getElementById("search-movie-form").addEventListener("submit", searchMovie);

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

function searchMovie(ev){
    let title = ev.target["0"].value;
    let url = baseUrl + apiKey + "&t=" + title;
    requestData(url).then(saveMovie);
    ev.preventDefault();
}

function showAllMovies() {
    let movieElement = document.getElementById("movies");
    getAllMovies().then(allMovies => {
        for(movie of allMovies) {
            let movieTemplate = replaceNullData `${createMovieTemplate(movie.val())}`;
            movieElement.insertAdjacentHTML('beforeend', movieTemplate);
        }
    });
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
            console.log("Adding movie to the database.");
            database.ref().child("movies").push(movie);
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
