const {
  wordPicker,
  letters,
 
} = require("./script");

describe("guess word checker", () => {
  test("guess word is not empty", () => {
    expect(wordPicker("test")).toBeTruthy();
  });

  test("guess word is empty", () => {
    expect(wordPicker("")).toBeFalsy();
  });
});

describe("letter checker", () => {
  test("guessed letter should return true ", () => {
    const word = "test";
    const guessedLetters = "t";
    expect(letters(word, guessedLetters.includes)).toEqual(true);
  });
});
