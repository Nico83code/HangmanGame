const {
  wordPicker,
  guessedLetters,
  doubleLetter,
  guessTries,
  updateLetters,
  winOrLose,
} = require("./script");

describe("guess word checker", () => {
  test("guess word is not empty", () => {
    expect(wordPicker("test")).toBeTruthy();
  });

  test("guess word is empty", () => {
    expect(wordPicker("")).toBeFalsy();
  });
});

describe("guess letter check", () => {
  const input = 
  const word = 
  test("letter in guessedlist", () => {
    expect(guessedLetters("test")).toBeTruthy();
  });

  test("letter nog in guessedlist", () => {
    expect(guessedLetters("")).toBeFalsy();
  });
});
