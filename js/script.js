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
let amountTries = 1;

// function pick word
let word;
const wordpicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

//let inputs
const wordGuessed = function (word, inputs) {
  let remaining = word.filter(function (letter) {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

// const clean = function () {
//   document.querySelector("input").value = "";
// };

// let gameOver;

//win game
const winTheGame =  () => {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};
//lose game
const loseTheGame = () => {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

// const spanTheWord1 = function (word) {
//   document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
// };

// let tries = 0;
// const updateTriesDisplay = function (tries) {
//   document.querySelector(".lives span").innerHTML = 5 - tries;
// };

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

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


/// conditions
const gameStatus = (gameOver) => {
  if (gameOver === true) {
    // const input1 = document.querySelector("input").value;
    // document.querySelector("input").value = "";
    return;
  }
};

const guessLetter = function () {
  if (gameOver) {
    return;
  }
  const input1 = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (inputs.includes(input1) || input1 === "") {
    return;
  }

  if (!word.includes(input1)) {
    tries++;
    document.querySelector(".lives span").innerHTML = amountTries - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= amountTries) {
    loseTheGame();
  }
};

// function getThePlayer(player) {
//   let play = document.getElementById("player1");
//   play = play + "We are about to start the game";
//   return play;
// }

const resetGame = () => {
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";
};
//start the game
function beginTheGameWithPlayer(player1) {
  // getThePlayer(player1);
  gameOver = false;
  resetGame();

  word = wordpicker(wordList).split("");
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
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});
