//object inheritance using Object.creae()

let u1={
    name:"john",
    email:"john@gmail.com"
}

let u2=Object.create(u1,{
    age:{
        value:22
    },
    mobile:{
        value:"98987676598"
    }
})

let u3=Object.create(u2,{
    city:{
        value:"bengaluru"
},
isuser:{
    value:true
}
})
console.log(`u3=`,u3)