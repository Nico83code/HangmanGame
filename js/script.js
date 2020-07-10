// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  // "developer",
  // "telefoon",
  // "moeder",
  // "snoer",
  // "geeuw",
];
let amountTries = 2;
let word;

// function pick word
const wordPicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

//win game
const winTheGame = () => {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};
//lose game
const loseTheGame = () => {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

//let inputs
const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

//wrong letters
const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

//update word in dom
const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

// conditions
const value = () => {
  givenValue = document.querySelector("input").value;
  document.querySelector("input").value = "";
  return givenValue;
};

const doubleLetter = (value) => {
  if (inputs.includes(value) || value === "") {
    return;
  }
};

const wordInclude = (value) => {
  if (!word.includes(value)) {
    tries++;
    document.querySelector(".lives span").innerHTML = amountTries - tries;
  }
};

const updateLetters = (value) => {
  inputs.push(value);
  theWord(word, inputs);
  letters(word, inputs);
};

const winOrLose = () => {
  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= amountTries) {
    loseTheGame();
  }
};

const guessLetter = () => {
  if (gameOver) {
    return;
  }
  const inputValue = value();

  // const input1 = document.querySelector("input").value;
  // document.querySelector("input").value = "";
  doubleLetter(inputValue);
  // if (inputs.includes(inputValue) || inputValue === "") {
  //   return;
  // }
  wordInclude(inputValue);
  // if (!word.includes(inputValue)) {
  //   tries++;
  //   document.querySelector(".lives span").innerHTML = amountTries - tries;
  // }
  updateLetters(inputValue);
  // inputs.push(inputValue);
  // theWord(word, inputs);
  // letters(word, inputs);
  winOrLose();
  // if (wordGuessed(word, inputs)) {
  //   winTheGame();
  // } else if (tries >= amountTries) {
  //   loseTheGame();
  // }
};

const resetGame = () => {
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
};
//start the game
function startTheGame() {
  gameOver = false;
  resetGame();

  word = wordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = amountTries - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}
// dom loadin
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startTheGame);
  startTheGame();
});

module.exports = {};
