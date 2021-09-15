import {eqArrays} from './module.js';
const assertArraysEqual = function(actual, expected) {
  const happy = '😄';
  const sad = '😥';

  eqArrays
    ? console.log(`${happy} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${sad} Assertion Failed: ${actual} !== ${expected}`);
};


assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);//true
assertArraysEqual([1], [1]); //true
assertArraysEqual([1,2,3], [1,'2',3]); //false
assertArraysEqual(["light","house","labs"], ["light,house,labss"]); //false