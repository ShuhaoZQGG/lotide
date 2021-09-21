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


module.exports = countOnly;