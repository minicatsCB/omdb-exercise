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

function showMovie(movie) {
    let movieElement = document.getElementById("movie");
    let movieTemplate = replaceNullData `${createMovieTemplate(movie)}`;
    movieElement.innerHTML = movieTemplate;
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
