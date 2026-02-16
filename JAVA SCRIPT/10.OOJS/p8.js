//Object.entries(Object) => conver from to entries

let car={
    title:"Jeep",
    company:"wranler",
    year:2024
    
}

console.log(`object=`,car)

//conver the object into entries
let out = Object.entries(car)

console.log(`entries (array of key & values=`,out)// array of key:values

//object.fromEntries(entries)=> convert from enries into Object

let out1= Object.fromEntries(out)
console.log(`object=`,out1)