function fold(arr, fun, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = fun(acc, arr[i], i, arr);
  }
  return acc;
}

function foldRight(arr, fun, acc) {
  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fun(acc, arr[i], i, arr);
  }
  return acc;
}
function reduce(arr, fun) {
  let acc = arr[0];
  for (let i = 1; i < arr.length; i++) {
    acc = fun(acc, arr[i], i, arr);
  }
  return acc;
}
function reduceRight(arr, fun) {
  let acc = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    acc = fun(acc, arr[i], i, arr);
  }
  return acc;
}
