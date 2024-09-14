function filterValues(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    if (fun(obj[key])) {
      obj2[key] = obj[key];
    }
  }
  return obj2;
}
function mapValues(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    obj2[key] = fun(obj[key]);
  }
  return obj2;
}

function reduceValues(obj, fun, initial = 0) {
  for (let key in obj) {
    initial = fun(initial, obj[key]);
  }
  return initial;
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
// console.log(mapValues(nutrients, (v) => v + 1));
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr));
