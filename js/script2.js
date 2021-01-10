"use strict";

// VARIABLES
const btnNextJoke = document.querySelector("#nextJoke");
const paragraphQuestion = document.querySelector(".content__question");
const paragraphAnswer = document.querySelector(".content__answer");

class App {
  jokesNumber;
  jokes;

  constructor() {
    this.getJokes();
  }

  getJokes() {
    // connecting to API to retrieve jokes
    fetch("https://api.jsonbin.io/b/5ff70d0b09f7c73f1b6ec2b4")
      .then((response) => response.json())
      .then((data) => {
        this.jokes = data.jokes;
        this.jokesNumber = this.jokes.length;
        this.printJoke();
      });
  }

  printJoke = () => {
    // Drawing next joke
    const jokeNumber = this.randomNumber(0, this.jokesNumber);
    const { question, answer } = this.jokes[jokeNumber];

    document.querySelector(".content__btn").style.pointerEvents = "none";

    // Clearing terminal
    this.clearTerminal();

    // Write question
    this.writeSimulation([question], ".content__question");

    setTimeout(
      this.writeSimulation.bind(undefined, [answer], ".content__answer"),
      question.length * 100 + 2000
    );

    setTimeout(() => {
      document.querySelector(".content__btn").style.pointerEvents = "auto";
    }, question.length * 100 + 2000);
  };

  writeSimulation = (phrase, elementName) => {
    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        // add next character to h1
        document.querySelector(elementName).innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      // check if dataText[i] exists
      if (i < phrase[i]?.length) {
        // text exists! start typewriter animation
        typeWriter(phrase[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  };

  clearTerminal = () => {
    paragraphQuestion.textContent = paragraphAnswer.textContent = "";
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

const app = new App();

// EVENT HANDLERS
// printing next joke on click
btnNextJoke.addEventListener("click", app.printJoke);
