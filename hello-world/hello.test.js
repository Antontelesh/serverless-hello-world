const fn = require("./hello");

describe("hello", () => {
  test("returns hello world", () => {
    expect(fn()).toEqual("Hello, world");
  });
});
