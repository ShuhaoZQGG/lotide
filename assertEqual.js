const assertEqual = function(actual, expected) {
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1,2,3], [1,2,3]);
assertEqual(["light","house","labs"], "light,house,labs");

