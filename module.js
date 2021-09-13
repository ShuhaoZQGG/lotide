export function assertEqual(actual, expected) {
  const happy = '😄';
  const sad = '😥';
  let response = '';
  if (actual === expected) {
    response = `${happy} Assertion Passed: ${actual} === ${expected}`;
  } else {
    if (typeof(actual) === 'object' && typeof(expected) === 'object') {
      let actualString = actual.join("");
      let expectedString = expected.join("");
      if (actualString === expectedString) {
        response = `${happy} Assertion Passed: ${actual} === ${expected}`;
      } else {
        response = `${sad} Assertion Failed: ${actual} !== ${expected}`;
      }
    } else {
      response = `${sad} Assertion Failed: ${actual} !== ${expected}`;
    }
  }
  return response;
};

export function head(list){
  if (list == undefined){
    return undefined;
  } else{
    return list[0];
  }
}

export function tail(list){
  if (list === []) {
    return undefined;
  }
  return list.slice(1);
}