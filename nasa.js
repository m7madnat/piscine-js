function nasa(n){
    let res = ""
    for(var i=1 ; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            res = res + "NASA"
        }else if(i % 3 === 0 ){
            res = res + "NA"
        }else if(i % 5 === 0 ){
            res = res + "SA"
        }else{
            res = res + i
        }
        if (i != n){
            res += " "
        }
    }
    return res
}

console.log(nasa(15));