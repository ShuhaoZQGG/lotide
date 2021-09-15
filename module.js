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

export const eqArrays = function(actual, expect) {
  let answer = true;
  if (actual.length !== expect.length) {
    answer = false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expect[i]) {
        answer = false;
      }
    }
  }
  console.log(answer);
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

export const countOnly = function(allItems, itemsToCount){
  const object = new Object();

  for (const item of allItems){
    if (itemsToCount[item] === true){
      if (object[item]){
        object[item] ++ ;
      } else {
        object[item] = 1;
      }
    }
  }
  return object;
}