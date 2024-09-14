function fusion(ob1, ob2) {
    let key1 = Object.keys(ob1)
    let key2 = Object.keys(ob2)
    let key = key1.concat(key2)
    let keys = new Set(key)
    let ob3 = {}

    keys.forEach(i => {
        if (typeof ob1[i] === "string" && typeof ob2[i] === "string") {
            ob3[i] = ob1[i] + " " + ob2[i]
        } else if (typeof ob1[i] === "number" && typeof ob2[i] === "number") {
            ob3[i] = ob1[i] + ob2[i]
        } else if (Array.isArray(ob1[i]) && Array.isArray(ob2[i])){
            ob3[i] = ob1[i].concat(ob2[i])
        } else if ((typeof ob1[i] === "object") && typeof ob2[i] === "object") {
            ob3[i] = fusion(ob1[i], ob2[i])
        } else if (ob2[i] != undefined) {
            ob3[i] = ob2[i]
        } else {
            ob3[i] = ob1[i]
        }
    })
    return ob3
}
// const ob = {a: 1, b: "hel", c: {d: 4}, f: ["1"]}
// const ob3 = {a: 2, b: "natsheh", c: {d: 2}, e: 4, f: [2]}
// console.log(fusion(ob,ob3));