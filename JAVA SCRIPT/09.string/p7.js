//match() and matchAll()

var msg="javascript is front end programming script";
var exp=/programming/; //regular expression
var res=msg.match(exp); //first match index
console.log(`output=`,res);

//matchAll
var msg1="javascript us web SCRIPTING language, and also can be used as a server script too.";
var exp1=/script/gi;

let out=msg1.matchAll(exp1)
console.log(`output=`,out)

for(let item of out){
  console.log(`item=`,item)  
}