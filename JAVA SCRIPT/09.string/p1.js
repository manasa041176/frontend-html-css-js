/*
charAt(position)-character
charCodeAt(position)-decimal values of ascii
indexof(char)-first index position of charracter
lastIndexof(char)-last indx position of character
*/

var str="welcome to javascript class.";
console.log(`string=`,str)

console.log(`charAt()=`, str.charAt(0))//w
console.log(`charCodeAt()=`,str.charCodeAt(0)) //ASCII
console.log(`indexof(e)=`,str.indexOf("e"))//1
console.log(`lastIndexof(e)=`, str.lastIndexOf("e"))//6

console.log(`indexof(a)=`, str.indexOf("a"))//12
console.log(`lastIndexof(a)=`,lastIndexof("a"))//24

console.log(`\n`)

var str1="john is an engineer. JOHN is working in Ibm. john stays in bangalore";

//str.replace(target,value)
console.log(`str1=`,str1)
 console.log(`replace=`,str1.replace("john","tom"))
 console.log(`replace=`,str1.replace(/john/,"tom"))
 console.log(`replace=`,str1.replace(/john/gi,"tom"))

 /*/regular expression/

 gi=>global case insensitive
 */

 //slice(start,end), substring(start,end) and substr(start1,length)
 console.log(`slice=`,str1,slice(0,19));
 console.log(`substring=`,str1.substring(0,19));

 console.log(`substr=`,str1.substr(0,19));//deprecated

 var str2="helloworld";
 console.log(`substr=`, str2.substr(1,3))

 console.log(`substring=`, str2.substring(1,3))
 console.log(`slice=`, str2.slice(1,3))


 console.log(`\n`)

 //concat()and trim()
 let str3="john";
 var str4="harry";

 console.log(`concat=`, str3.concat(str4))

 var str5=str4.trim()
 console.log(`concat=`, str3.concat(str5))
