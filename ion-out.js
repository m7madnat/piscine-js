const reg = /tion/gi;
function ionOut(str) {
  let res = "";
  let arr = [];

  let newStr = str.split(" ");

  for (let w of newStr) {
    reg.lastIndex = 0;
    let a = reg.exec(w);
    if (a !== null) {
      res = w.slice(0, a.index + 1);
      arr.push(res);
    }
  }
  return arr;
}
console.log(ionOut("promotion, provistion"));
