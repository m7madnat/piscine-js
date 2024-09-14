function adder(arr, initialSum = 0) {
  return arr.reduce((accumulator, num) => accumulator + num, initialSum);
}

console.log(adder([1, 2, 3, 4]), 10);
function sumOrMul(arr, start = 0) {
  return arr.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc * num;
    } else {
      return acc + num;
    }
  }, start);
}

function funcExec(func, start = 0) {
  return func.reduce((ind, func) => func(ind), start);
}
