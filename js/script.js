let btnJoke = document.querySelector("#nextJoke");
let bntRom = document.querySelector("#btnRom");

let pQuestion = document.querySelector(".content__question");
let pAnswer = document.querySelector(".content__answer");

let question = [
  "jaki jest ulubiony horror frontendowców?",
  "a wiecie o co prosi programista w sklepie z pościelą?",
];
let answer = ["Freddy kontra JSON", "o code review"];
let count = 0;
let romanCounter = 0;

const writeText = (phrase, elementName) => {
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

const printingJoke = () => {
  const number = Math.floor(Math.random() * answer.length);
  console.log(number);
  pQuestion.textContent = pAnswer.textContent = "";
  document.querySelector(".content__logo").style.visibility = "hidden";
  document.querySelector(".content__logo").style.left = "0%";
  setTimeout(() => {
    document.querySelector(".content__logo").style.visibility = "visible";
    document.querySelector(".content__logo").style.left = "88%";
  }, 5000);

  writeText([question[number]], ".content__question");
  setTimeout(
    writeText.bind(undefined, [answer[number]], ".content__answer"),
    7000
  );
};

btnJoke.addEventListener("click", printingJoke);
