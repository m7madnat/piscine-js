function triangle(sym,n){
    var line = ""
    for (var i = 1; i <= n;i++){
        for (var j = 1; j <= i;j++){
            line += sym
        }
        if (i != n) line += '\n'
    }
    return line
}
console.log(triangle("#",5));

// function triangle(char, n) {
//     let str = "";
//     for (var i = 1; i <= n; i++) {
//         str = str + char.repeat(i) + "\n";
//     }
//     return str.slice(0, -1);
// }