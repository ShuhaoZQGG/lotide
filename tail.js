import { assertEqual } from "./module.js";

const tail = function(list) {
  if (list === []) {
    return undefined;
  }
  return list.slice(1);
};

console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));
console.log(assertEqual(result, ["Lighthouse","Labs"]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!