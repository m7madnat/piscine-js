function isPositive(num){
    if (num > 0){
        return true
    }
    else{
        return false
    }
}
function abs(num){
    if (isPositive(num)|| num ==0){
        return num
    }
    else {
        return -num
    }
}