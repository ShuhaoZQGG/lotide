import { assertEqual } from './module.js'

const head = function(list){
  if (list == undefined){
    return undefined;
  } else{
    return list[0];
  }
}

console.log(head([1,12,9]));
console.log(head([]));
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));