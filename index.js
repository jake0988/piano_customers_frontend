const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    getUsers()
    // createForm()
   const addUserForm = document.querySelector('#add-user-form')
  
   addUserForm.addEventListener('submit', (e) => {
 
      eventFormHandler(e)
 
      console.log(e, "This was submitted")
   }
    )
  }
)

function eventFormHandler(e) {
  e.preventDefault()
  const inputFirstName = document.querySelector('#input-first-name').value
  const inputLastName = document.querySelector('#input-last-name').value
  const inputAddress = document.querySelector('#input-address').value
  const inputPhoneNumber = document.querySelector('#input-phone-number').value
  const inputNumberOfPianos = document.querySelector('#input-number-of-pianos').value
  const inputNotes = document.querySelector('#input-notes').value
  postFetch(inputFirstName, inputLastName, inputAddress, inputPhoneNumber,inputNumberOfPianos, inputNotes)
}

function postFetch(first_name, last_name, address, phone_number, number_of_pianos, notes) {
  const bodyData = {first_name, last_name, address, phone_number, number_of_pianos, notes}
  fetch(endPoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bodyData) 
})
.then(resp => resp.json())
.then(user => {
  const rUser = user.data
  renderUser(rUser)
})
.catch(err => console.log(err))
}

function renderUser(user) {
  debugger
  const userMarkup = `
  <div data-id=${user.id}>
  <h3>${user.attributes.first_name} ${user.attributes.last_name}</h3>
  <p>number_of_pianos: ${user.attributes.number_of_pianos}</p>
  <p>phone_number: ${user.attributes.phone_number}</p>
  <p>technician_notes: ${user.attributes.technician_notes}</p>
 <button data-id=${user.id}>edit</button>
  <hr>
 </div>`
 document.getElementById("user-container").innerHTML += userMarkup
}

function getUsers() {
  fetch(endPoint)
    .then(resp => resp.json())
    .then(users => {
      users.data.forEach(user => {
        renderUser(user)
      })
  })
}

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}