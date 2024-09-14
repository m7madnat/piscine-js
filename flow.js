function flow(arr) {
    return function() {
        let args = arguments
        for (let i in arr) {
            let fun = arr[i];
            args = [fun(...args)]
        }
        return args[0]
    }
}