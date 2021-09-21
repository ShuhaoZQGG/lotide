const map = function(array, callback) {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
};

module.exports = map;