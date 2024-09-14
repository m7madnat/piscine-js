function longWords(arr) {
  return arr.every((x) => x.length >= 5);
}
function oneLongWord(arr) {
  return arr.some((x) => x.length >= 10);
}
function noLongWords(arr) {
  return arr.every((x) => !(x.length >= 7));
}
// let arr1 = ["filslfilslfilsl", "carbon", "chart", "glare", "express"];
// console.log(noLongWords(arr1));
