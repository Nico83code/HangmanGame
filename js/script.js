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
let amountTries = 5;
let word;
let inputs;
let tries = 0;

// function guessing word
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

// //update screen misschien dubbel

const updateTriesDisplay = function (tries) {
  document.querySelector(".lives span").innerHTML = amountTries - tries;
};

const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

//wrong letters
const guessedLetters = function (word, inputs) {
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
  const givenValue = document.querySelector("input").value;
  document.querySelector("input").value = "";
  return givenValue;
};

const doubleLetter = (value) => {
  if (inputs.includes(value) || value === "") {
    return;
  }
};

const guessTries = () => {
  tries++;
  updateTriesDisplay(tries);
  return tries;
};

const updateLetters = (value) => {
  inputs.push(value);
  theWord(word, inputs);
  guessedLetters(word, inputs);
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

  if (inputs.includes(inputValue) || inputValue === "") {
    return;
  }
  guessTries(inputValue);

  updateLetters(inputValue);

  winOrLose();
};

//start the game
function startTheGame() {
  gameOver = false;
  //reset game
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordPicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = amountTries - 0;

  inputs = [];
  theWord(word, inputs);
  guessedLetters(word, inputs);
}
// dom loadin
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startTheGame);
  startTheGame();
});

module.exports = {
  wordPicker,
  guessedLetters,
  doubleLetter,
  guessTries,
  updateLetters,
  winOrLose,
};
