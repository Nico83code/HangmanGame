// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
let amountTries = 6;
let word;
let inputs;
let tries = 0;

// function guessing word
const wordPicker = (list) => {
  let index = Math.floor(Math.random() * list.length);
  list[index].split("");
  return list[index].split("");
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

//update dom tries
const updateTriesDisplay = () => {
  document.querySelector(".lives span").innerHTML = amountTries - tries;
};

//word guessed
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

const guessTries = (value) => {
  if (!word.includes(value)) {
    tries++;
    hangmanAnimation(tries);
    updateTriesDisplay(tries);
    return tries;
  }
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
  //input value
  const inputValue = value();
  if (inputs.includes(inputValue) || inputValue === "") {
    return;
  }
  guessTries(inputValue);
  updateLetters(inputValue);
  winOrLose();
};

const checkGameover = (tries) => {
  if (tries === 5) {
    return true;
  }
};

//start the game
const startTheGame = () => {
  gameOver = false;
  tries = 0;
  inputs = [];

  //reset game
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
  resetHangMan();

  word = wordPicker(wordList);

  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  document.querySelector(".lives span").innerHTML = amountTries - 0;

  theWord(word, inputs);
  guessedLetters(word, inputs);
};
// dom loadin
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startTheGame);
  startTheGame();
});

module.exports = {
  wordPicker,
  theWord,
  guessTries,
  updateLetters,
  checkGameover,
  wordGuessed,
};
