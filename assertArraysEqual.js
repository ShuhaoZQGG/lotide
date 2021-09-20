const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  const happy = '😄';
  const sad = '😥';

  eqArrays(actual, expected)
    ? console.log(`${happy} Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`)
    : console.log(`${sad} Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
};


module.exports = assertArraysEqual;