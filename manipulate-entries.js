function filterEntries(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    if (fun([key, obj[key]])) {
      obj2[key] = obj[key];
    }
  }
  return obj2;
}

function mapEntries(obj, fun) {
  let obj2 = {};
  for (let key in obj) {
    let arr = [key, obj[key]];
    obj2[key] = fun(arr);
  }
  let obj3 = {};
  for (let key in obj2) {
    obj3[obj2[key][0]] = obj2[key][1];
  }
  return obj3;
}

function reduceEntries(obj, fun, initial = "") {
  let keys = Object.keys(obj);
  let accumulator = initial;
  keys.forEach((key) => {
    accumulator = fun(accumulator, [key, obj[key]]);
  });
  return accumulator;
}

function totalCalories(cart) {
  let total = 0;
  for (let i in cart) {
    total += Calc(cart[i], nutritionDB[i]["calories"]);
  }
  return Number(total.toFixed(1));
}
function lowCarbs(cart) {
  let total = {};
  for (let i in cart) {
    if (Calc(cart[i], nutritionDB[i]["carbs"]) < 50) {
      total[i] = cart[i];
    }
  }
  return total;
}
function cartTotal(cart) {
  let final = {};
  for (let key in cart) {
    final[key] = {};
    for (let i in nutritionDB[key]) {
      final[key][i] =
        Math.round(Calc(cart[key], nutritionDB[key][i]) * 1000) / 1000;
    }
  }
  return final;
}
function Calc(Grams, xPer100Grams) {
  return (Grams / 100) * xPer100Grams;
}

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
// const nutritionDB = {
//   tomato: {
//     calories: 18,
//     protein: 0.9,
//     carbs: 3.9,
//     sugar: 2.6,
//     fiber: 1.2,
//     fat: 0.2,
//   },
//   vinegar: {
//     calories: 20,
//     protein: 0.04,
//     carbs: 0.6,
//     sugar: 0.4,
//     fiber: 0,
//     fat: 0,
//   },
//   oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//   onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//   garlic: {
//     calories: 149,
//     protein: 6.4,
//     carbs: 33,
//     sugar: 1,
//     fiber: 2.1,
//     fat: 0.5,
//   },
//   paprika: {
//     calories: 282,
//     protein: 14.14,
//     carbs: 53.99,
//     sugar: 1,
//     fiber: 0,
//     fat: 12.89,
//   },
//   sugar: {
//     calories: 387,
//     protein: 0,
//     carbs: 100,
//     sugar: 100,
//     fiber: 0,
//     fat: 0,
//   },
//   orange: {
//     calories: 49,
//     protein: 0.9,
//     carbs: 13,
//     sugar: 9,
//     fiber: 0.2,
//     fat: 0.1,
//   },
// };
// console.log(cartTotal(groceriesCart));
// console.log(totalCalories(groceriesCart))
// console.log(lowCarbs(groceriesCart))
// const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 };
//

// console.log(filterEntries(groceriesCart1, ([, v]) => v < 300));
// // console.log(mapEntries(
// //   filterEntries(groceriesCart1, ([k, v]) => k === 'onion'),
// //   ([k, v]) => [`✔️${k}`, v - 100],
// // ))
// // console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, ''))
//
