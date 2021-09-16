const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let el of array) {
    results.push(callback(el));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);