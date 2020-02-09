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
