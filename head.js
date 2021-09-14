import { assertEqual } from './module.js';

const head = function(list) {
  let answer;
  if (list === []) {
    answer = undefined;
    console.log(answer);
    return answer;
  } else {
    answer = list[0];
    console.log(answer);
    return answer;
  }
};

head([1,12,9]);
head([]);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");