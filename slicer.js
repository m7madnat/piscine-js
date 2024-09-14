function slice(arr,start,end){
    if (end === undefined) end = arr.length
    if (start < 0) start = arr.length + start
    if (end < 0) end = arr.length + end
    let res;
    if (typeof arr === "string"){
        res = ""
        for (let i = start; i< end ; i++){
            res += arr[i]
        }
    }
    if (Array.isArray(arr)){
        res = []
        for (let i = start; i< end ; i++){
            res.push(arr[i])
        }
    }
    return res
}

//console.log(slice([1,2,3,4],-2,3));