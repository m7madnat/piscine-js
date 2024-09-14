import { readFile } from "fs/promises";
let words = process.argv[2];

async function spliting() {
  try {
    let arr = (await readFile(words, "utf8")).split(" ");
    let res3 = "";
    for (let w2 of arr) {
      res3 += " " + slicing(w2);
    }
    console.log(res3.trim());
  } catch (error) {
    throw new Error("error");
  }
}
function slicing(w) {
  let res = "";
  let half = Math.floor(w.length / 2);
  let fhalf = w.slice(0, half);
  let shalf = w.slice(half);
  res = shalf + fhalf;
  return res;
}

spliting()
