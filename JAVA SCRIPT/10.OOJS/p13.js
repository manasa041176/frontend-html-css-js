/*class
class is a group of objects(state & behaviours)
state-> variables
behaviours->methods
*/

class User{
    constructor(){
        //properties
        this.name="tom";
        this.email="tom@gmail.com";
        this.age=25;
        this.city="bangaluru";
    }
    //methods
getUser() {
    document.writeln(`<h3> name is ${this.name}</h3>`)
}
}

let x=new User();
console.log(`object=`,x)
x.getUser();

document.writeln(`<h3>age is ${x.age}years</h3>`)