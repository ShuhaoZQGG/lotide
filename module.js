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
  if (list === []) {
    return undefined;
  } else {
    return list[0];
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