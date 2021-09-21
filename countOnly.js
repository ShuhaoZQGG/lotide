const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const object = new Object();

  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (object[item]) {
        object[item] ++;
      } else {
        object[item] = 1;
      }
    }
  }
  return object;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);