//"user strict"; //define strict mode
//Object.defineproperties(Object,Properties) -> all the properties write protected / read only properties and throw exception in strict ode

let user={}
Object.defineProperties(user,{
 name:{
    value:"Mike"
 },
 email:{
    value:"mike@gmail.come"
 },
 city:{
    value:"Manglore"
 },
 getName:{
    value:function(){
        return `<h1> name is ${this.name}</h1>`
    }
 },
 getEmail: {
    value:() => {
        //inside the arrow function this pointer return undefined
        document.writeln(`<h1> email id is = ${this.email}</h1>`)
    }
 }
})

console.log(`user =`, user)

//assing the new values
user.name = "sam"
user.age=25
user.city="banglore"

console.log(`after user=`,user)