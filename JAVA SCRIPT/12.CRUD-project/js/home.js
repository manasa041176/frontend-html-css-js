let usersBlock = document.getElementById("users-data")

let usersList = JSON.parse(localStorage.getItem("users")) || []

function deleteUser(id) {
    if(window.confirm(`Are you sure to delete user data ${id} ?`)) {
        let userIndex = usersList.findIndex(item => item.id == id)
        usersList.splice(userIndex,1)
        localStorage.setItem("users", JSON.stringify(usersList))
        alert("user data deleted succesfully")
        window.location.reload()
    } else {
        alert("delete terminated")
    }
}

function printData(data) {
    data.forEach(item => {
        usersBlock.innerHTML += `<div class="card">
                                   <h3 class="title"> ${ item?.fullname } </h3>
                                <p>
                                    <strong>Email:</strong>
                                    <span> ${item?.email} </span>
                                </p>
                                <p>
                                    <strong>Mobile:</strong>
                                    <span> ${item?.mobile} </span>
                                </p>
                                
                                <details>
                                        <summary> Message </summary>
                                        <span> ${item?.message} </span>
                                </details>
                                
                                <div class="btn-group">
                                   <a href="update.html?id=${item?.id}">Edit</a>
                                   <a onclick="deleteUser(${item?.id})" href="#">Delete</a>
                                </div>
            </div>`
    })
}

printData(usersList)