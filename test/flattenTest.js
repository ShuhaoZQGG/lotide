const flatten = require('../flatten');
const array = [1, 2, [3, 4], 5, [6]];
const arrayB = [[[[[1],2],3],4],5];
console.log(flatten(array)); // output: [1, 2, 3, 4, 5, 6]
console.log(flatten(arrayB));