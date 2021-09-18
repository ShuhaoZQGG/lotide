import { assertEqual } from './module.js';

const eqArrays = function(actual, expected) {
  let answer = true;

  if (actual.length !== expected.length) {
    answer = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (!Array.isArray(actual[i]) && actual[i] !== expected[i]){
        answer = false;
      } else if (Array.isArray(actual[i])){
        answer = eqArrays(actual[i], expected[i])
      }
    }
  }
  
  return answer;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays([1, 2, 3], [1, 3, 2]); // => false
eqArrays([1, 2, 3], [1, '2', 3]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
