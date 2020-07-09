//Guess word list
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

var man = document.querySelectorAll(".man-0");
var missStorage = "";

//function pick word
const wordpicker = (list) => {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

// let inputs;
const wordGuessed = (word, inputs) => {
  let remaining = word.filter((letter) => {
    return !inputs.includes(letter);
  });
  return remaining.length === 0;
};

//reset input
const clean = () => {
  document.querySelector("input").value = "";
};

//win game
const winTheGame = () => {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

//lose game
const lose4 = () => {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const spanTheWord1 = (word) => {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

let tries = 0;
const updateTriesDisplay = (tries) => {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const letters = (word, inputs) => {
  let wrongLetters = inputs.filter((letter) => {
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = (word, inputLetterWords) => {
  let display = word.map((letter) => {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

function generateMisses() {
  var missedLetters = "";

  for (var i = 0; i < man.length; i++) {
    man[i].style.display = "none";
  }

  for (var i = 0; i < missStorage.length; i++) {
    document.querySelector(".man-" + (i + 1)).style.display = "block";

    missedLetters += missStorage[i] + ", ";
  }

  missedLetters = missedLetters.substring(0, missedLetters.length - 2);
  misses.innerHTML = "MISSES: " + missedLetters;

  if (missStorage.length >= 6) {
    result = 2;
  }
}

const guessLetter = () => {
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
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input1);
  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};

function getThePlayer(player) {
  let play = document.getElementById("player1");
  play = play + "We are about to start the game";
  return play;
}

function beginTheGameWithPlayer(player1) {
  getThePlayer(player1);
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordpicker(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});
