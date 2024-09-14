function first(n){
    return n[0]
}
function last(n){
    return n[n.length-1]
}

function kiss(n){
    let k = [last(n) , first(n)]
    return k
}