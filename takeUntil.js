const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (let el of array) {
    if (!callback(el)) {
      result.push(el);
    } else {
      break;
    }
  }
  return result;
};



module.exports = takeUntil;