const eqArrays = require('./eqArrays');
const eqObjects = function(actual, expected) {
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
  return answer;
};


module.exports = eqObjects;

