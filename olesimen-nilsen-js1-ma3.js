// Question 1
const subtract = (a, b) => a - b;

// Question 2

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;

let genres = "sports";
const genreUrl = gamesUrl + genres;

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.dir(json);
        gamesLogger(json);
    })
    .catch(function(error) {
        window.location.href = "error.html";
    });

function gamesLogger(json) {
    const games = json.results;

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
    }
}

// Question 3
let animalText = "These cats are outrageous.";
animmalText = animalText.replace("cats", "giraffes");

// Question 4
/* Given the URL below, write code that checks if there is a userId parameter in the query string.

If there is no userID parameter, redirect the browser to third.html.

If there is a userID parameter and its value is less than 10, redirect to first.html.

If there is a userID parameter and its value is 10 or greater, redirect to second.html. */

// https://my.site.com?userId=7

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");

    if (userId < 10) {
        document.location.href = "first.html";
    } else if (userId >= 10) {
        document.location.href = "second.html";
    }
} else {
    document.location.href = "third.html";
}
