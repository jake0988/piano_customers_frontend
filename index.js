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
  fetch(endPoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    first_name: first_name,
    last_name: last_name,
    address: address,
    phone_number: phone_number,
    number_of_pianos: number_of_pianos,
    notes: notes
  }) 
})
.then(resp => resp.json())
.then(user => {
  console.log(user)
})
}

function getUsers() {
  fetch(endPoint)
    .then(resp => resp.json())
    .then(users => {
      const userList = document.getElementById("user-container")
      users.data.forEach(user => {

         const userMarkup = `
         <div data-id=${user.id}>
         <h3>${user.attributes.first_name} ${user.attributes.last_name}</h3>
         <p>number_of_pianos: ${user.attributes.number_of_pianos}</p>
         <p>phone_number: ${user.attributes.phone_number}</p>
         <p>technician_notes: ${user.attributes.technician_notes}</p>
        <button data-id=${user.id}>edit</button>
         <hr>
        </div>`
       userList.innerHTML += userMarkup
      }) 
  })
}

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}