const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    getUsers()
   
   const addUserForm = document.querySelector('#add-button')
  
   addUserForm.addEventListener('submit', (e) =>
 
      eventFormHandler(e)
 
      // console.log(e, "This was submitted")
    )
  }
)

function eventFormHandler(e) {
  // e.preventDefault()
  debugger
  console.log(e)
}

function getUsers() {
  fetch(endPoint)
    .then(resp => resp.json())
    .then(users => {
      const userList = document.getElementById("user-container")
      users.data.forEach(user => {

         const userMarkup = 
         `<h3>${user.attributes.first_name} ${user.attributes.last_name}</h3>
         <p>number_of_pianos: ${user.attributes.number_of_pianos}</p>
         <p>phone_number: ${user.attributes.phone_number}</p>
         <p>technician_notes: ${user.attributes.technician_notes}</p>
        <hr>`
       userList.innerHTML += userMarkup
      }) 
  })
}