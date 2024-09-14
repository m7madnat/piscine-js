import { writeFile } from "fs/promises";
let words = process.argv.slice(2);

async function spliting(arr) {
  let arr2 = [];
  let res3 = "";
  for (let w of arr) {
    arr2 = w.split(" ");
    if (arr2.length == 1) {
      res3 += slicing(w);
      await writeFile("verydisco-forever.txt", res3);
      return;
    }
  }
  for (let w2 of arr2) {
    res3 += " " + slicing(w2);
  }
  await writeFile("verydisco-forever.txt", res3.trim());
}

function slicing(w) {
  let res = "";
  let half = Math.round(w.length / 2);
  let fhalf = w.slice(0, half);
  let shalf = w.slice(half);
  res = shalf + fhalf;
  return res;
}

spliting(words);
