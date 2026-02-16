//object.getPrototypeOf(object) -> read the properties of an prototypees object

//Object.setPrototypeOf(object) -> set the new properties to an prototypes object

let car = {
    title:"Innova",
    company: "toyota",
    model: 2024,
    color: "white"
}

let car1=Object.create(car)

console.log(`car =` , car)
console.log(`car =` , car1)

//retrive the object properties from prototype
let car2 = Object.getPrototypeOf(car1)
console.log(`getprototypeOf=`, car2)

let car3 =Object.setPrototypeOf(car1,{
    title: "thar",
    company:"mahindra",
    model: 2023,
    color:"rblack"
})

console.log(`car3=`, car3)