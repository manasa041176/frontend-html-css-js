// generator function

function *display(){
    yield"sam"
    yield"tom"
    yield"mark"
}

let out=display();
console.log(`out=`,out)
console.log(`out=`,out.next())
console.log(`out=`,out.next())
console.log(`out=`,out.next())