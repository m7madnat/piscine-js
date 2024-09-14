function chunk(arr,size){
    let d2 = []
    for (var i = 0; i < arr.length; i+= size){
        d2.push(arr.slice(i,i + size))
    }
    return d2
}

console.log(chunk([1,2,3,4,5,6,7,8],3));