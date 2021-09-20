const eqArrays = function(actual, expected) {
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

module.exports = eqArrays;