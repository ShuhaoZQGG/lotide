const assertEqual = function(actual, expected) {
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

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual([1,2,3], [1,2,3]));
console.log(assertEqual(["light","house","labs"], "light,house,labs"));

