
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
  console.log(object);
  return object;
};


countLetters("lighthouse in the house");