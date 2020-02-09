// Question 1
/* function(a, b) {
    return a - b;
} */

const subtract = (a, b) => a - b;

// Question 2
/* Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name.

In the catch method of your code, redirect to error.html if there is an error. */

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;

let genres = "sports";
const genreUrl = gamesUrl + genres;

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
        gamesLogger(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function gamesLogger(json) {
    const games = json.results;

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name);
    }
}
