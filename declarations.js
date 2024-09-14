const escapeStr = "`,\\,/,\",'"
const arr = [4,'2']
const obj = {
    str : "natsheh",
    num : 24,
    bool :false,
    undef :undefined
}
const nested = {
    arr : [4, undefined,'2'],
    obj : {
        str :"mohamed",
        num : 24,
        bool : false
    }
}

Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)