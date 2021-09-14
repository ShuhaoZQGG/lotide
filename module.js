export const assertEqual = function(actual, expected) {
  const happy = '😄';
  const sad = '😥';
  let response = '';
  if (actual === expected) {
    response = `${happy} Assertion Passed: ${actual} === ${expected}`;
  } else {
    response = `${sad} Assertion Failed: ${actual} !== ${expected}`;
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
