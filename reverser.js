function reverse(str){
    if (typeof str === "string"){
        let res = ""
        for(var i = str.length-1; i >= 0 ;i--){
            res += str[i]
        }
        return res
    }
    if (typeof str === "object"){
        let res = []
        for(var i = str.length-1; i >= 0 ;i--){
            res.push(str[i])
        }
        return res
    }
}
// console.log(reverse("hello"));