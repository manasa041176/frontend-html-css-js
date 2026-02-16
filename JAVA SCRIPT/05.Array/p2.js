/* unshift(val) and shift() - FIFO*/
var user = ["tom", "ayan"];
console.log(`user =`,user)

//array.unshift(value)

user.unshift("Harry")// first in
console.log(`after unshift =`, user)

user.unshift("Mark")// first in
console.log(`after unshift =`, user)


console.log(`\n`)

user.shift();
console.log(`after shift =`, user)

user.shift();
console.log(`after shift =`, user)

user.shift();
console.log(`after shift =`, user)
