is.num = function(x){
    return (typeof x) === "number"
}
is.nan = function(x){
    return Number.isNaN(x)
}
is.str = function(x){
    return (typeof x) === "string"
}
is.bool = function(x){
    return (typeof x) === "boolean"
}
is.undef = function(x){
    return (typeof x) === "undefined"
}
is.def = function(x){
    return (typeof x) != "undefined"
}
is.arr = function(x){
    return Array.isArray(x)
}
is.obj = function(x){
    return typeof x === 'object' && x !== null && !Array.isArray(x)
    && !(x instanceof RegExp)
    && !(x instanceof Date)
    && !(x instanceof Set)
    && !(x instanceof Map)
}

is.fun = function(x){
    return (typeof x) === "function"
}

is.truthy = function(x){
    return x
}

is.falsy = function(x){
    return !x
}

