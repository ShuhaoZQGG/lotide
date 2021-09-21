const without = require('../without');

without(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);//true
without([1], [1]); //true
without([1,2,3], [1,'2',3]); //false
without(["light","house","labs"], ["light,house,labss"]); //false

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);