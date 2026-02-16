//object constructor properties

//object.create(object) -> clone or copy the input bject

let user = {
    name: "tom",
    age:22,
    city:"begaluru"
}

console.log(`user = `,user)

let u1 = Object.create(user)
console.log(`u1=`,u1)