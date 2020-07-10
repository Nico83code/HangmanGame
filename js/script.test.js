const {
  wordPicker,
  guessedLetters,
  guessTries,
  doubleLetter,
  updateLetters,
  winOrLose,
} = require("./script");

describe("guess word checker not empty", () => {
  test("guess word is not empty", () => {
    expect(wordPicker("test")).toBeTruthy();
  });

  test("guess word is empty", () => {
    expect(wordPicker("")).toBeFalsy();
  });
});

describe("Test to update the attempts", () => {
  test("If the tries increase", () => {
    let tries = 0;
    expect(guessTries(tries)).toBe(tries + 1);
  });
});
