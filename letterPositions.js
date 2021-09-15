import { assertArraysEqual } from "./module.js";

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    if (currentChar === ' ') {
      continue;
    }
    /*
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  */if (!results[currentChar]) {
      results[currentChar] = [];
    }
    results[currentChar].push(i);
  }

  // delete results[' '];
  

  console.log(results);
  return results;
};


letterPositions("lighthouse in the house");
letterPositions("AAaBbCc");
letterPositions("");
assertArraysEqual(letterPositions("hello").e, [1]);
