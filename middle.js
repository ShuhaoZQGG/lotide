const middle = function(array) {
  let middle = [];
  if (array.length <= 2){
    middle;
  } else if (array.length % 2 !== 0){
    middle.push(array[Math.floor(array.length/2)])
  } else {
    middle.push(array[array.length/2-1])
    middle.push(array[array.length/2])
  }
  console.log(middle);
  return middle;
}

// 1 and 2 elements have no middle
middle([1]) // => []
middle([1, 2]) // => []

// odd number of elements
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

//even number of elements
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]