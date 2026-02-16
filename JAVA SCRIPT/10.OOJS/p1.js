//object - group pf properties
/* prototype of an object
type object_name = {
key: value, -> pro[perty
}

*/
let user={
    name:"John",
    age:22,
    isuser:true,
    hobbies:["riding","driving","cycling"],
        bank:{
            title:"SBI"
        },
        getuser:function(){
            return `My name is ${this.name}`
        },
        hetAge:() => {
            // this pointer cann't access other property values(this pointer is global inside arrow function body)
            document.writeln(`<h1> age is ${this.age}</h1>`) //undefined
        }
}
console.log(`user =`, user)

document.writeln(`<h1> name=${user.name} </h1>`);
document.writeln(`<h1> age=${user["age"]} </h1>`);
document.writeln(`<h1> name ${user.getUser()} </h1>`);

user.getAge()