const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result, ["Lighthouse","Labs"]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!