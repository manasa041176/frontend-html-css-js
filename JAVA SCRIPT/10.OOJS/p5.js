//Object.defineProperty(object,key,value)-> it is used to add a single key:value pair (property) from outside(externally)

let user = {};
console.log(`user=`,user)

Object.defineProperty(user,"name",{
    value:"tom"
})

console.log(`user=`,user)

Object.defineProperty(user,"age",{
    value:22
})

console.log(`user=`,user)