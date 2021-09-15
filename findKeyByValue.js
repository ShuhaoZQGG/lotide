import { assertEqual } from "./module.js";

const findKeyByValue = function(object, value) {
  const newObject = new Object();
  for (const [key, val] of Object.entries(object)) {
    if (!newObject[val]) {
      newObject[val] = key;
    }
  }
  return newObject[value];
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);