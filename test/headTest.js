const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("return 5 will be false for ['5', 4, 3, 2, 1]", () => {
    assert.notStrictEqual(head(['5', 4, 3, 2, 1]), 5);
  });

  it(`return "Hello" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it(`return "hello" will be false for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.notStrictEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
  });
});

