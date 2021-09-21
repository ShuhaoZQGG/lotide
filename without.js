const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let answer = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1 && answer.indexOf(source[i]) === -1) {
      answer.push(source[i]);
    }
  }
  console.log(answer);
  return answer;
};

module.exports = without;