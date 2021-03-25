const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    getUsers()
    // createForm()
   const addUserForm = document.querySelector('#add-user-form')
   
   addUserForm.addEventListener('submit', (e) => {
      eventFormHandler(e)
   })
  document.getElementById('user-container').addEventListener('click', (e) => {
     //can't attach the listener to the edit button.
     if(e.target.matches("button.btn")) { 
     debugger
     updateUser(e)
     }
     
   })
})

function updateUser(e) {
  const dataId = e.target.dataset.id
  const user = User.findUser(dataId)
  
  document.getElementById("user-container").innerHTML = user.renderUpdateUser()
  // user form still shows
  document.getElementById('user-patch-form').addEventListener('submit', e => {
   
  e.preventDefault()
  console.log("THIS WORKS")
  }
  )}

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
  const newUser = new User(rUser, rUser.attributes)
  document.getElementById("user-container").innerHTML += newUser.renderUser()
})
.catch(err => console.log(err))
}



function getUsers() {
  fetch(endPoint)
    .then(resp => resp.json())
    .then(users => {
      users.data.forEach(user => {
        let newUser = new User(user, user.attributes)
        const userContainer = document.getElementById("user-container")
        userContainer.innerHTML += newUser.renderUser()
      })
  })
}

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}

function patchUser(first_name, last_name, address, phone_number, number_of_pianos, notes) {
  const bodyData = {first_name, last_name, address, phone_number, number_of_pianos, notes}
  fetch(endPoint, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData)
  })
  .then(resp => resp.json())
  .then(jsonData => console.log(jsonData))
}