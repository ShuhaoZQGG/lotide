import { inspect } from "util";

export const assertEqual = function(actual, expected) {
  const happy = '😄';
  const sad = '😥';
  let response = '';
  if (actual === expected) {
    response = `${happy} Assertion Passed: ${actual} === ${expected}`;
    console.log(response);
  } else {
    response = `${sad} Assertion Failed: ${actual} !== ${expected}`;
    console.log(response);
  }
  return response;
};

export const head = function(list) {
  let answer;
  if (list === []) {
    answer = undefined;
    console.log(answer);
    return answer;
  } else {
    answer = list[0];
    console.log(answer);
    return answer;
  }
};

export const tail = function(list) {
  if (list === []) {
    return undefined;
  }
  return list.slice(1);
};

export const eqArrays = function(actual, expected) {
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

export const assertArraysEqual = function(actual, expected) {
  const happy = '😄';
  const sad = '😥';

  eqArrays
    ? console.log(`${happy} Assertion Passed: ${actual} === ${expected}`)
    : console.log(`${sad} Assertion Failed: ${actual} !== ${expected}`);
};

export const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    middle;
  } else if (array.length % 2 !== 0) {
    middle.push(array[Math.floor(array.length / 2)]);
  } else {
    middle.push(array[array.length / 2 - 1]);
    middle.push(array[array.length / 2]);
  }
  console.log(middle);
  return middle;
};

export const countOnly = function(allItems, itemsToCount) {
  const object = new Object();

  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (object[item]) {
        object[item] ++;
      } else {
        object[item] = 1;
      }
    }
  }
  return object;
};

export const countLetters = function(string) {
  const object = new Object();
  string = string.toLowerCase();
  string = string.split(" ").join("");
  for (let el of string) {
    if (object[el]) {
      object[el] ++;
    } else {
      object[el] = 1;
    }
  }
  console.log(object);
  return object;
};

export const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  sentence = sentence.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence[i];
    if (currentChar === ' ') continue;

    if (!results[currentChar]) results[currentChar] = [];

    results[currentChar].push(i);
  }

  console.log(results);
  return results;
};

export const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

export const eqObjects = function(actual, expected) {
  let answer = true;
  if (Object.keys(actual).length !== Object.keys(expected).length) answer = false;
  
  for (const key in actual) {
    if (!Object.prototype.hasOwnProperty.call(expected, key)) answer = false;
    
    if (typeof(actual[key]) === 'object' && Array.isArray(actual[key])) {
      if (!eqArrays(actual[key],expected[key])) {
        answer = false;
      }
    }  else if (typeof(actual[key]) !== 'object'){
      if (expected[key] !== actual[key]) {
        answer = false;
      }
    } else if (typeof(actual[key]) === 'object' && !Array.isArray(actual[key])){
      answer = eqObjects(actual[key], expected[key])
    } 
}
  //console.log(answer);
  return answer;
};


export const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

export const map = function(array, callback) {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
};

export const findKey = function(object, callback){
  const keys = Object.keys(object);
  for (const key of keys){
    if (callback(object[key])){
      console.log(key);
      break;
    } 
  }
};