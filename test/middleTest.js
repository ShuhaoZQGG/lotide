const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// 1 and 2 elements have no middle
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// odd number of elements
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//even number of elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,2,3]), [2])
assertArraysEqual(middle([1,2,3,4,5]), [3])

assertArraysEqual(middle([1,2,3,4]), [2,3])
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4])