function letterSpaceNumber(str) {
  let arr = str.match(/\w \d\b/g);
  if (arr !== null) {
    return arr;
  }
  return [];
}
console.log(letterSpaceNumber("a 1 b 2c 3 d 4 e 12 f 9g 7"));
