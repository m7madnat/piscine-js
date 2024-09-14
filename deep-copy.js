function deepCopy(arr) {
  if (Array.isArray(arr)) {
    let res = []
    for (let i = 0 ;i < arr.length;i++) {
      if (arr[i] instanceof RegExp) {
          res[i] = new RegExp(arr[i].source, arr[i].flags);
         }else{
           res[i] = deepCopy(arr[i]);
         }
    }
    return res;

    
  } else if (typeof arr == "object"){
      let res = {};
      for (let key in arr) {
          res[key] = deepCopy(arr[key]);
        }
          return res;
    }else {
        return arr
    }
}
console.log(deepCopy([console.log ,/hello/]))