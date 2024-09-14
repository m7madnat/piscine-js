function sameAmount(a, reg1, reg2) {
  let re1 = new RegExp(reg1, "g");
  let re2 = new RegExp(reg2, "g");

  let x = a.match(re1);
  let y = a.match(re2);

  if (x != null && y != null && x.length === y.length) {
    return true;
  }
  return false;
}
