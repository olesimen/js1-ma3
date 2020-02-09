// Question 1
const subtract = (a, b) => a - b;

// Question 2

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;

let genres = "sports";
const genreUrl = gamesUrl + genres;

// Or without the variables, perhaps?

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
animalText = animalText.replace("cats", "giraffes");

// Question 4

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

// Question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// Question 6

// Question 7
const gameItem = "https://api.rawg.io/api/games/3801";

fetch(gameItem)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function(error) {
        console.log(error);
    });
