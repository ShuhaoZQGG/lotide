const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    if (currentChar === ' ') continue;

    if (!results[currentChar]) results[currentChar] = [];

    results[currentChar].push(i);
  }

  return results;
};

module.exports = letterPositions;