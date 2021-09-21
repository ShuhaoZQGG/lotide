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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

module.exports = eqObjects;

