const {
  wordPicker,
  theWord,
  guessTries,
  updateLetters,
  checkGameover,
  wordGuessed,
} = require("./script");

describe("guess word checker not empty", () => {
  test("test word", () => {
    const input = ["test"];
    expect(wordPicker(input)).toEqual(["t", "e", "s", "t"]);
  });
});

describe("check letter is in guess word", () => {
  test("test letter in word", () => {
    const array = ["t", "e", "s", "t"];
    expect(theWord(array)).toContain(["t"]);
  });
});

describe("check guess tries increase", () => {
  test("check tries increase", () => {
    const tries = 0;
    expect(guessTries(1)).toBe(2);
  });
});

describe("check guess letters", () => {
  test("check guess letters", () => {
    const expected = ["t"];
    const array = ["t", "e", "s", "t"];
    expect(updateLetters(array)).toEqual(expect.arrayContaining(expected));
  });
});

describe("check guess tries increase", () => {
  test("check tries increase", () => {
    expect(guessTries(1)).toBe(2);
  });
});

describe("check gameover when no tries", () => {
  test("check gameover when no tries", () => {
    let tries = 5;
    expect(checkGameover(tries)).toBe(true);
  });
});

describe("game status checker", () => {
  test("check game won if word is guessed", () => {
    const word = ["t", "e", "s", "t"];
    expect(wordGuessed(word, ["t", "e", "s", "t"])).toEqual(true);
  });
});
