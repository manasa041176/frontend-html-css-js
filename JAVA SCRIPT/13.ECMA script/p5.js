// array concat using spread operator

let x=[12,30,4,65]

let y=[1,3,5,7,8]

let z=[34,52,51,42,35]

let out=[...x,...y,...z]

console.log(`out=`,out)



let user1=["varsha,varun,vinutha,vinay"]
let user2=["uday,vinay,varsha"]
let user3=["uday1,vinay1,vishnu"]
let out1 = [...user1,...user2,...user3]

console.log(`out=`,out1)