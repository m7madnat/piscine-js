function repeat(str,n){
    let res = ''
    while (n > 0){
        res += str
        n--
    }
    return res
}
//console.log(repeat("h",5));