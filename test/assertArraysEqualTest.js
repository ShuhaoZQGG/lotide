const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]);//true
assertArraysEqual([1], [1]); //true
assertArraysEqual([1,2,3], [1,'2',3]); //false
assertArraysEqual(["light","house","labs"], ["light,house,labss"]); //false
assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]); // => true
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]); // => false