function invert(obj) {
  let obj2 = {};
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    obj2[obj[key]] = key;
  });
  return obj2;
}

console.log(
  invert({ brand: "ford", motor: "v8", year: 2000, fast: true, eco: true })
);
