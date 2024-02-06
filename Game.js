import Country from "./Country";

class Game {
  #score = 0;
  #countries;
  currentCountry;
  #currentCIndex = 0;

  constructor(countries) {
    this.#countries = countries;
    console.log(this.#countries);
    this.currentCountry = new Country(this.#countries[this.#currentCIndex]);
    this.currentCountry.displayFlag();
  }

  addPoint() {
    this.#score++;
  }

  isGameFinished() {
    return this.#currentCIndex >= this.#countries.length ? true : false;
  }

  nextCountry() {
    if (!this.isGameFinished()) {
      this.#currentCIndex++;
      console.log(this.#currentCIndex);
      this.currentCountry = new Country(this.#countries[this.#currentCIndex]);
      this.currentCountry.displayFlag();
    }
  }
  get score() {
    return this.#score;
  }
}

export default Game;
