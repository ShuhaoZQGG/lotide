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

export const eqArrays = function(actual, expect){
  let answer = true;
  if (actual.length !== expect.length){
    answer = false;
  } else {
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expect[i]){
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
  let answer = `${happy} Assertion Passed: ${actual} === ${expected}`;
  if (actual.length !== expected.length) {
    answer = `${sad} Assertion Failed: ${actual} !== ${expected}`;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        answer = `${sad} Assertion Failed: ${actual} !== ${expected}`;
      }
    }
  }
  console.log(answer);
  return answer;
};