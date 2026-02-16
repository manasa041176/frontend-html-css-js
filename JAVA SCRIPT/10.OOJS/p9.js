//Object.freeze(object) -> disable the re-assignment

let user ={
    name:"John",
    email:"john@gmail.com",
    age: 22
}
console.log(`user=`, user)

//freeze the object

Object.freeze(user)

  user.name="tom",
    user.email="tom@gmail.com",
    user.age= 25

    console.log(`after-=`, user)

    //object.keys(object)- retuen array of keys
    console.log(`keys=`,Object.keys(user))

    //object.values(object)-> return array of values
     console.log(`values=`,Object.values(user))