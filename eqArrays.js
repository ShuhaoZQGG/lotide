import { assertEqual } from './module.js';

const eqArrays = function(actual, expect){
  if (actual.length !== expect.length){
    return false;
  } else {
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expect[i]){
        return false;
      } 
    }
  }
  return true;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays([1, 2, 3], [1, 3, 2])) // => false
console.log(eqArrays([1, 2, 3], [1, '2', 3])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
