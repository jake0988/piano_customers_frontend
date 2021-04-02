const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    getUsers()
    // createForm()
   const addUserForm = document.querySelector('#add-user-form')
   
   addUserForm.addEventListener('submit', (e) => {
      eventFormHandler(e)
   })
  document.getElementById('user-container').addEventListener('click', e => patchSequence(e))
})

function appointments(appoints) {
  debugger
}

function patchSequence(e) {
  document.removeEventListener('click', e => patchSequence(e))
  console.log(e.target)  
  //can't attach the listener to the edit button.
    if(e.target.matches("button.btn")) { 
      updateUser(e)
      }
    else if(e.target.matches("button.dlt-btn")) { 
      deleteUser(e)
      }
}
function updateUser(e) {
  const dataId = e.target.dataset.id
  const user = User.findUser(dataId)
  
  document.getElementById("user-container").innerHTML = user.renderUpdateUser()
  // user form still shows
  document.getElementById('user-patch-form').addEventListener('submit', e => {
  e.preventDefault()
  patchEventFormHandler(e)
  }
  )}


function patchEventFormHandler(e) {
  e.preventDefault()
  const id = e.target.dataset.id
  const patchContainer = document.querySelector('#user-patch-form')
  const inputFirstName = patchContainer.querySelector('#fname').value
  const inputLastName = patchContainer.querySelector('#lname').value
  const inputAddress = patchContainer.querySelector('#address').value
  const inputPhoneNumber = patchContainer.querySelector('#pnumber').value
  const inputNumberOfPianos = patchContainer.querySelector('#npianos').value
  const inputNotes = patchContainer.querySelector('#notes').value

  patchUser(id, inputFirstName, inputLastName, inputAddress, inputPhoneNumber,inputNumberOfPianos, inputNotes)
}

function confirmDelete() {
   if (window.confirm('Are you sure you want to delete this record?')) {
    return true
   }
   else {
     return false
   }
}


function eventFormHandler(e) {
  e.preventDefault()
  const userId = document.querySelector('#data-id')
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
  location.reload()
})
.catch(err => console.log(err))
}

function postPianoFetch(user_id, make, model, serial, age, private_technical_notes, image_url) {
  const bodyData = {make, model, serial, age, private_technical_notes, image_url, user_id}
  fetch(`http://localhost:3000/api/v1/users/${user_id}/pianos/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bodyData) 
})
.then(resp => resp.json())
.then(piano => {
  const rPiano = piano.data
  const newPiano = new Piano(rPiano, rPiano.attributes)
  document.getElementById("piano-container").innerHTML += newPiano.renderPiano()
  // debugger
  // location.reload()
})
.catch(err => console.log(err))
}

function deletePianolistener(piano) {
  const pianoContainer = document.querySelector("#piano-div")
      // pianoContainer.innerHTML = ""
  pianoContainer.addEventListener('click', e => {
    if(e.target.type == "submit") {
    deletePiano(piano.attributes.user_id, piano.id)
    }
    })
}

function createPianoForm(user) {
  const pianoForm = document.querySelector('div.form-container')
  pianoForm.innerHTML = Piano.addPiano()
  const container = document.querySelector('div.form-container')
  container.addEventListener('click', e => {
    
    if(e.target.type == 'submit') {
      // preventDefault()
  pianoEventFormHandler(user)
    }
})
}

function showPianos(pianos) {
  // const div = document.createElement('div') 
  const div = document.querySelector('div#piano-container')

  div.id = "piano-div"
  if(pianos.data) {
  // let pianos = piano.data
    pianos.data.forEach(piano => {
    let newPiano = new Piano(piano, piano.attributes)
    div.innerHTML += newPiano.renderPiano()
    deletePianolistener(piano)
    // return div
    // debugger
  })
  }
}

function getPianos(user, piano) {
  fetch(`http://localhost:3000/api/v1/users/${user}/pianos/`)
    .then(resp => resp.json())
    .then(pianos => {
      createPianoForm(user)
      showPianos(pianos) 
      })
      .catch((err) => console.log(err))
  
}

function pianoEventFormHandler(user) {
  const container = document.querySelector('div.form-container')
  // container.addEventListener('click', e => {
  //   preventDefault()
  //   if(e.target.type == 'submit') {
  const user_id = user
  const make = container.querySelector('#make').value
  const model = container.querySelector('#model').value
  const serial = container.querySelector('#serial').value
  const age = container.querySelector('#age').value
  const notes = container.querySelector('#notes').value
  const image_url = container.querySelector('#image_url').value
  // debugger
  postPianoFetch(user_id, make, model, serial, age, notes, image_url)
// }
// })
}

function deletePiano(user, piano) {
  if (confirmDelete()) {
    fetch(`http://localhost:3000/api/v1/users/${user}/pianos/${piano}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
    .then(location.reload())
    // .then(resp => resp.json())
    // .then(jsonData => {
    //   getUsers()
    // })
  }
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
      // .catch(errors => console.log("THESE ARE YOUR ERRORS", errors))
  })
}

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}

function patchUser(id, first_name, last_name, address, phone_number, number_of_pianos, notes) {
  const bodyData = {first_name, last_name, address, phone_number, number_of_pianos, notes}
  fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyData),
  })
  .then(resp => resp.json())
  .then(jsonData => {
    console.log(jsonData)
    const user = User.findUser(id)
    location.reload()
    document.getElementById("user-container").innerHTML = ""
  })
}

function deleteUser(e) {
  if (confirmDelete()) {
  const dataId = e.target.dataset.id
  fetch(`http://localhost:3000/api/v1/users/${dataId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  })
  .then(location.reload())
  // .then(resp => resp.json())
  // .then(jsonData => {
  //   getUsers()
  // })
}
}