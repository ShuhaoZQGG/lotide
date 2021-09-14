const assertArraysEqual = function(actual, expected) {
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


assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);//true
assertArraysEqual([1], [1]); //true
assertArraysEqual([1,2,3], [1,'2',3]); //false
assertArraysEqual(["light","house","labs"], ["light,house,labss"]); //false