let fullnameEl = document.getElementById("fullname")
let emailEl = document.getElementById("email")
let mobileEl = document.getElementById("mobile")
let messageEl = document.getElementById("msg")

// read the data from local storage
let users = JSON.parse(localStorage.getItem("users")) || [];


function submitHandler(event) {
    event.preventDefault();
    try {
        let data  = {
            id: Math.floor(Math.random() * 10000),
            fullname: fullnameEl.value,
            email: emailEl.value,
            mobile: mobileEl.value,
            message: messageEl.value
        }

        console.log(`new data =`, data)

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
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users))
            alert("New user data added successfully")
            window.location.href = "index.html"
        }
        
    } catch (err) {
        console.error(err?.message)
    }
}