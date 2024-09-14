function arrToSet(n){
    return new Set(n)
}
function arrToStr(n){
    return n.join('');
}
function setToArr(n){
    return Array.from(n)
}
function setToStr(n){
    return Array.from(n).join('')
}
function strToArr(n){
    return n.split("")
}
function strToSet(n){
    return new Set(n.split(""))
}
function mapToObj(n){
    return Object.fromEntries(n)
}
function objToArr(n){
    return Object.values(n)
}
function objToMap(n){
    return new Map(Object.entries(n))
}
function arrToObj(n){
    return Object.assign({}, n);
}
function strToObj(n){
    return Object.assign({}, n.split(""));
}
function superTypeOf(value) {
    if (value === null) {
        return 'null';
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (Array.isArray(value)) {
        return 'Array';
    }
    if (value instanceof Map) {
        return 'Map';
    }
    if (value instanceof Set) {
        return 'Set';
    }
    // For other objects, including functions, Date objects, etc.
    if (typeof value === 'object') {
        return 'Object';
    }
    // Handling primitive types and ensuring consistent naming for expected results
    switch (typeof value) {
        case 'string':
            return 'String';
        case 'number':
            return 'Number';
        case 'boolean':
            return 'Boolean';
        case 'symbol':
            return 'Symbol';
        case 'function':
            return 'Function';
        default:
            return 'Unknown';
    }
}
//const str = 'hello'
//const arr = [1, 2, 1, 3]
// const obj = { x: 45, y: 75, radius: 24 }
// const set = new Set()
// const map = new Map()
// set.add(1)
// set.add(2)
// set.add(1)
// set.add(3)
// map.set('a', 1)
// map.set('b', 2)
// map.set(3, 'c')
// map.set(4, 'd')

// arrToSet(arr) // -> Set { 1, 2, 3 }
//arrToStr(arr) // -> '1213'
// setToArr(set) // -> [1, 2, 3]
// setToStr(set) // -> '123'
//strToArr(str) // -> ['h', 'e', 'l', 'l', 'o']
// strToSet(str) // -> Set { 'h', 'e', 'l', 'o' }
// mapToObj(map) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// objToArr(obj) // -> [45, 75, 24]
// objToMap(obj) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// arrToObj(arr) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// strToObj(str) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
//console.log(strToArr(str));