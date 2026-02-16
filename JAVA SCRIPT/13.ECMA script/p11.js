// function hoisting
// call the function before declaration 


sum(10,5) // execute without any error

function sum(a,b){
    document.writeln(`<h3> sum =${a+b}</h3>`)
}

product(10,5); //arrow function throws reference error
let product=(a,b) => {
    document.writeln(`<h3>product=${a*b}</h3>`)
}