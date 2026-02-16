// find() - single value and filter()- array of matched values

//object array
var users = [
    {
        id:1,
        first:"Raju",
        last:"Kumar",
        email:"raju@gmail.com"
    },
    {
        id:1,
        first:"Jhon",
        last:"Kumar",
        email:"John@gmail.com"
    },
    {
        id:3,
        first:"Raju",
        last:"Sharma",
        email:"raju@gmail.com"
    },
    {
        id:4,
        first:"Chand",
        last:"Sharma",
        email:"Chandu@gmail.com"
    },
    ];

    console.log(`users =`, users)

    /*
    array.find(function(item){
    return condition
)}
    */

let out1 = users.find(function(items){
    // return item?.id === 3
    return item?.first === "john"
})

console.log(`find=`, out1)


/*
array.filter(function(item){
return condition
})
*/

let out2 = users.filter(function(item){
    return item.last === "sharma"
})

console.log(`filter =`, out2)

    