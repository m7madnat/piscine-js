function cutFirst(input){
    let res = ""
    for (let i = 2; i < input.length;i++){
        res += input[i]
    }
    return res
}
function cutLast(input){
    let res = ""
    for (let i = 0; i < input.length -2;i++){
        res += input[i]
    }
    return res
}
function cutFirstLast(input){
    let res = ""
    for (let i = 2; i < input.length -2;i++){
        res += input[i]
    }
    return res
}
function keepFirst(input){
    if (input.length == 1 ){
        return input[0]
    }
    return input[0] + input[1]
}
function keepLast(input){
    let res = ""
    if (input.length == 1 ){
        return input[0]
    }
    for (let i = input.length -2; i < input.length;i++){
        res += input[i]
    }
    return res
}
function keepFirstLast(input){
    let res = ""
    if (input.length == 2 ){
        return input[0] + input[1]
    }
    if (input.length == 3 ){
        return input[0] + input[1] + input[2]
    }
    for (let i = 0; i < 2;i++){
        res += input[i]
    }
    for (let i = input.length -2; i < input.length;i++){
        res += input[i]
    }
    return res
}
// console.log(keepFirstLast("af"));