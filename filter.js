function filter(arr, fun) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}
function reject(arr, fun) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fun(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}
function partition(arr, fun) {
  let pass = [];
  let fail = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i], i, arr)) {
      pass.push(arr[i]);
    } else {
      fail.push(arr[i]);
    }
  }
  return [pass, fail];
}
