const head = require('../head');
const assertEqual = require('../assertEqual');
console.log(head([1,12,9]));
console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");