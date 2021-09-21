
const countLetters = function(string) {
  const object = new Object();
  string = string.toLowerCase();
  string = string.split(" ").join("");
  for (let el of string) {
    if (object[el]) {
      object[el] ++;
    } else {
      object[el] = 1;
    }
  }
  return object;
};

module.exports = countLetters;