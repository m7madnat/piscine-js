function map(arr, fun) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fun(arr[i], i, arr));
  }
  return res;
}
function flatMap(arr, fun) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let f = fun(arr[i], i, arr);
    if (Array.isArray(f)) {
      res.push(...f);
    } else {
      res.push(f);
    }
  }
  return res;
}
