function filterKeys(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    if (fun(key)) {
      obj2[key] = obj[key];
    }
  }
  return obj2;
}
function mapKeys(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    obj2[fun(key)] = obj[key];
  }
  return obj2;
}

function reduceKeys(obj, fun, initial = "") {
  let keys = Object.keys(obj);
  if (keys.length === 0) return initial;

  let accumulator = initial;

  keys.forEach((key, index) => {
    if (index === 0 && initial === "") {
      accumulator = key;
    } else {
      accumulator = fun(accumulator, key);
    }
  });

  return accumulator;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(reduceKeys(nutrients, (acc, cr) => `${acc}${cr}:`, ":"));
// output: carbohydrates, protein, fat
