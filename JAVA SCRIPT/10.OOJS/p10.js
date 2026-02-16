/* 
constructor custom - user defined

1.cnstructor  follows the function property
2.first letter of constructor name is uppercase(not mandatory)
3.constructor cann't return
4.properties of constructor can be create using "this" keyword
5.parameter and non-parameter contructor
*/
function Car(){
    this.title ="innova";
    this.company="Toyota";
    this.model=2025;
    this.color="white";

}

//create an object
let x = new Car();
console.log(`object=`,x)

document.writeln(`<h3> title=${x.title}</h3>`)
document.writeln(`<h3> company=${x["company"]}</h3>`)