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


module.exports = flatten;