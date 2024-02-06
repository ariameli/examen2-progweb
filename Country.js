class Country {
  #prop;
  #answers;
  //#flag = this.flag(); //do i choose emoji or img???
  constructor(countryInfo) {
    this.infos = countryInfo;
    this.#answers = this.correctAnswers();
  }

  //creates an array with all the correct answers
  correctAnswers() {
    const translations = this.infos.translations;
    //console.log(translations);
    const arrTrans = Object.values(translations);
    console.log(arrTrans);
    //const a = [];
    const s = new Set();
    arrTrans.forEach((e) => {
      //a.push(e.common.toLowerCase());
      s.add(e.common.toLowerCase());
    });
    //console.log(a);
    //const s = new Set(a);
    console.log(s);
    return s;
  }
  isCorrect(answer) {
    return this.#answers.has(answer.toLowerCase());
  }
  displayFlag() {
    const flagDiv = document.querySelector("#flag");
    //removes existing flag
    flagDiv.innerHTML = "";

    //creates new flag
    const flag = document.createElement("h1");
    flag.textContent = this.infos.flag;
    //flag.textContent = this.#flag;

    flagDiv.append(flag);
    return this;
  }

  get flag() {
    return this.infos.flag;
  }
}

export default Country;
