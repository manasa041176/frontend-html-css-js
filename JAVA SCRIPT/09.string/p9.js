//replace() and replaceAll()

var str="ball bat";

console.log(`input=`,str)
console.log(`replace=`,str.replace('b','c'))
console.log(`replaceAll=`,str.replaceAll('b','c'))



var str1 ="javascript is web scripting language, and also can be used as a server script too.";

var exp=/script/;
var out=str1.search(exp);

console.log(`output=`,out)//return first matched index position