function pyramid(str, int) {
  let res = ''
  for (let i = 1; i <= int; i++) {
      res += ' '.repeat(int - i).repeat(str.length)
      res += str.repeat(i * 2 - 1)
      if (i === int) {
          return res
      }
      res += '\n'
  }

  return res
}
console.log(pyramid('*', 5))

// function pyramid(char, n) {
//     let str = "";
//     let spaces = " ".repeat(char.length);
//     for (var i = 1; i <= n; i++) {
//         str = str + spaces.repeat(n - i) + char.repeat(2 * i - 1) + "\n";
//     }
//     return str.slice(0, -1);
// }