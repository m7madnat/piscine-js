function DNA(str){
    let res = ''
    for(let i = 0; i < str.length ; i++){
        if (str[i]=='C'){
            res += 'G'
        }
        if (str[i]=='G'){
            res += 'C'
        }
        if (str[i]=='A'){
            res += 'T'
        }
        if (str[i]=='U'){
            res += 'A'
        }
    }
    return res
}
function RNA(str){
    let res = ''
    for(let i = 0; i < str.length ; i++){
        if (str[i]=='G'){
            res += 'C'
        }
        if (str[i]=='C'){
            res += 'G'
        }
        if (str[i]=='T'){
            res += 'A'
        }
        if (str[i]=='A'){
            res += 'U'
        }
    }
    return res
}
console.log(RNA('ATCG'));