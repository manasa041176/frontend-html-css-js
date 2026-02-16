// spread and rest operator(...)

// rest operator(...) -> parameter to array

function sumOfNum(...x){
    console.log(`param=`,x)
}

sumOfNum(10,20,30,40,50,60,70,80,90)

// spread operator(...) -> array to parameter

let nums = [1,2,3,4,5,6,7,8,9];

console.log(`min =`,Math.min(1,2,3,4,5,6,7,8,9))
console.log(`min =`, Math.min(...nums))

console.log(`array=`, nums)
console.log(`parameter=`,...nums)