const assertEqual = require('../assertEqual');
const tail = require('../tail');
const {assert} = require('chai');

describe('#tail', () => {
  it('return [2,3,4] for [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const output = [2, 3, 4];
    assert.deepEqual(tail(input), output);
  }),

  it(`return ['2','3','4'] is false for [1, 2, 3, 4]`, () => {
    const input = [1, 2, 3, 4];
    const output = ['2','3','4'];
    assert.notDeepEqual(tail(input), output);
  })

  it(`return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    const output = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), output);
  })

  it(`return ["Yo Yo", "Lighthouse", "Labs"] as it is after calling tail() function`, () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];
    tail(input);
    const output = ["Lighthouse", "Labs"];
    assert.deepEqual(input, input);
  })
})
