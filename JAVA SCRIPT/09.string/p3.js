
/*
lexigo graphical comparision

a > b =  1
a < b = -1
a === b = 0
*/

//localcompare

var a="hello";
var b="world";
var c="hello";

console.log(`hello < world=`,a.localeCompare(b))
console.log(`world > hello=`,a.localeCompare(a))
console.log(`hello === world=`,a.localeCompare(c))
