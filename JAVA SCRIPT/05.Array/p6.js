/*
array.reduce(function(accumulator,current){})
*/

var num=[10,20,30,40,50,60,70,80,90]
console.log(`num =`,num)

var out = num.reduce(function(ac,cu){
    console.log(`ac = ${ac} and cu=${cu}`)
    return ac + cu;
}) 

console.log('`sum =',out)