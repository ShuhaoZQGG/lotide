import { assertEqual } from './module.js';

const eqArrays = function(actual, expected) {
  let answer = true;
  if (actual.length !== expected.length) {
    answer = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        answer = false;
      }
    }
  }
  //  console.log(answer);
  return answer;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays([1, 2, 3], [1, 3, 2]); // => false
eqArrays([1, 2, 3], [1, '2', 3]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS