function split(str , sep){
    if (str==''){
        return [str]
    }
    let words = []
    if (sep.length == 0){
        for (let x of str){
words.push(x)
        }
        return words
    }

    if (!str.includes(sep)){
        return [str]
    }
while (str.includes(sep)){
    let indSep = str.indexOf(sep) //5
    words.push( str.slice(0, indSep) )
    str = str.slice(indSep+sep.length)
}
words.push(str)
return words
}

function join(arr, sep){
let res = ''
for (let c of arr){
res += c + sep
}
return res.slice(0, res.length - sep.length)
}