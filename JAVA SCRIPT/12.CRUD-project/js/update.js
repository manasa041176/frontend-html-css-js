let fullnameEl = document.getElementById("fullname")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let messageEl = document.getElementById("msg")

// read the data from local storage
let users = JSON.parse(localStorage.getItem("users")) || [];


// read the id from url parameter
let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get("id")
console.log(`user id =`, id)

// separate user data based on id
let single = users.find(item => item.id == id)
console.log(`single =`, single)

fullnameEl.value = single?.fullname
emailEl.value = single?.email
mobileEl.value = single?.mobile
messageEl.value = single?.message


function submitHandler(event) {
    event.preventDefault();
    try {
        let data  = {
            id: id,
            fullname: fullnameEl.value,
            email: emailEl.value,
            mobile: mobileEl.value,
            message: messageEl.value
        }

        console.log(`updated data =`, data)

        let exEmail = users.find(item => item.email === data.email)
        let exMobile = users.find(item => item.mobile === data.mobile)

        if(exEmail){
            alert(`${data?.email} already registered`)
        } else if (exMobile) {
            alert(`${data?.mobile} already exists`)
        } else if (!data?.fullname || !data?.email || !data?.mobile || !data?.message) {
            alert("all inputs are required")
        }         
        else {
            let userIndex = users.findIndex(item => item.id == id)
            users.splice(userIndex,1,data)
            localStorage.setItem('users', JSON.stringify(users))
            alert("user data updated successfully")
            window.location.href = "index.html"
        }
        
    } catch (err) {
        console.error(err?.message)
    }
}