const tail = function(list) {
  let answer;
  if (list === []) {
    answer = undefined;
    console.log(answer);
    return answer;
  } else {
    answer = list.slice(1);
    return answer;
  }
};

module.exports = tail;