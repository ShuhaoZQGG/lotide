const flatten = function(array) {
  let output = [];

  const doFlatten = function(array) {
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        output.push(array[i]);
      } else {
        doFlatten(array[i]);
      }
    }
  };
  doFlatten(array);
  return output;
};

const array = [1, 2, [3, 4], 5, [6]];
const arrayB = [[[[[1],2],3],4],5];
console.log(flatten(array)); // output: [1, 2, 3, 4, 5, 6]
console.log(flatten(arrayB));