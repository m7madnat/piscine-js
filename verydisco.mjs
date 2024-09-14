let words = process.argv.slice(2);

function spliting(arr) {
  let arr2 = [];
  let res3 = "";
  for (let w of arr) {
    arr2 = w.split(" ");
    if (arr2.length == 1) {
      res3 += slicing(w);
      return res3;
    }
  }
  for (let w2 of arr2) {
    res3 += " " + slicing(w2);
  }

  return res3.trim();
}
function slicing(w) {
  let res = "";
  let half = Math.round(w.length / 2);
  let fhalf = w.slice(0, half);
  let shalf = w.slice(half);
  res = shalf + fhalf;
  return res;
}

console.log(spliting(words));
