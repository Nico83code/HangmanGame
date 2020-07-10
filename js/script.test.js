const { verifyPassword, hasRightLength } = require("./script.js");

describe("Password verifier utility functions", () => {
  test("hasRightLength", () => {
    expect(hasRightLength("123456789")).toBe(false);
  });
});
