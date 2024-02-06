//initialise le jeu
//controle le flux principal des intercations

//récupère donnée + les mélanges

//initialise l'objet Game avec pays mélangés

//Gère les interactions utilisateur via un Event Listener pour la soumission du formulaire.

//Met à jour et affiche les scores et les meilleurs scores.

//- Utilise la classe `Game` de `Game.js`.
//- Manipule directement le DOM pour afficher les scores et les meilleurs scores.
//- Lance des appels API pour récupérer les données des pays.
import Country from "./Country.js";
import Game from "./Game.js";
import { shuffle } from "lodash";

const url = "https://restcountries.com/v3.1/all";
//localStorage.setItem("highscore", 0);
//récupérer des pays depuis l'API et les mélanger
fetch(url)
  .then((a) => {
    return a.json();
  })
  .then((data) => {
    //console.log(data);
    //shuffle the countries
    const shuffledCountries = shuffle(data);

    //console.log(shuffledCountries);

    //new game with shuffled countries
    const game = new Game(shuffledCountries);

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //gère le highscore
      //const highscore = 0;

      //gère le jeu
      if (!game.isGameFinished()) {
        const inputValue = document.querySelector("input").value;
        if (game.currentCountry.isCorrect(inputValue)) {
          game.addPoint();
          //game.nextCountry();
        }
        game.nextCountry();
        document.querySelector("form").reset();

        if (game.score > localStorage.getItem("highscore")) {
          //highscore = game.score;
          localStorage.setItem("highscore", game.score);
        }

        document.querySelector(
          "#highscore"
        ).innerHTML = `<h1>HighScore: ${localStorage.getItem(
          "highscore"
        )}</h1>`;

        document.querySelector(
          "#score"
        ).innerHTML = `<h1>Score: ${game.score}</h1>`;
      } else {
        alert(`Game Over! Your score is ${game.score}`);
      }
    });
  });
