/* 
block bindings

var - global scope

let - blocj scope / local scope
const
*/

try{
    if(true){
    const x=120;
    console.log(`local/block=`,x)
}

console.log(`global=`,x)
}catch(error){
    console.log(error); //handle run-time errors (exception handling)
}



