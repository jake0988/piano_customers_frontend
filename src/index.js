const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    // getUsers()
    const fetching = new Fetching
    fetching.getFetch()
    // createForm()
   const addUserForm = document.querySelector('#add-user-form')
   
   addUserForm.addEventListener('submit', (e) => {
     const app = new App
     app.eventFormHandler(e)
   })
  document.getElementById('user-container').addEventListener('click', e => patchSequence(e))
})


function patchSequence(e) {
  document.removeEventListener('click', e => patchSequence(e))
  console.log(e.target)  
  //can't attach the listener to the edit button.
    if(e.target.matches("button.btn")) { 
      updateUser(e)
      }
    else if(e.target.matches("button.dlt-btn")) { 
      const adapter = new Adapter;
      adapter.fetchDelete(e.target.dataset.id)
      }
}
function updateUser(e) {
  const dataId = e.target.dataset.id
  const user = User.findUser(dataId)
  
  document.getElementById("user-container").innerHTML = user.renderUpdateUser()
  // user form still shows
  document.getElementById('user-patch-form').addEventListener('submit', e => {
  e.preventDefault()
  const app = new App
  app.patchEventFormHandler(e)
  }
  )}


function deletePianolistener(piano) {
  const pianoContainer = document.querySelector("#piano-div")
      // pianoContainer.innerHTML = ""
  pianoContainer.addEventListener('click', e => {
    if(e.target.type == "submit") {
      const adapter = new Adapter
      adapter.deletePiano(piano.attributes.user_id, piano.id)
    }
    })
}

function createPianoForm(user) {
  const pianoForm = document.querySelector('div.form-container')
  pianoForm.innerHTML = Piano.addPiano()
  const container = document.querySelector('div.form-container')
  container.addEventListener('click', e => {
    
    if(e.target.type == 'submit') {
      const app = new App
      app.pianoEventFormHandler(user)
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

function getPianos(user) {
  const fetching = new Fetching;
  fetching.getPianosFetch(user)
}

// function pianoEventFormHandler(user) {
//   const container = document.querySelector('div.form-container')
//   // container.addEventListener('click', e => {
//   //   preventDefault()
//   //   if(e.target.type == 'submit') {
//   const user_id = user
//   const make = container.querySelector('#make').value
//   const model = container.querySelector('#model').value
//   const serial = container.querySelector('#serial').value
//   const age = container.querySelector('#age').value
//   const notes = container.querySelector('#notes').value
//   const image_url = container.querySelector('#image_url').value
//   // debugger
//   const fetching = new Fetching;
//   fetching.postPianoFetch(user_id, make, model, serial, age, notes, image_url)
// // }
// // })
// }

// function getUsers() {
//   const adapter = new Adapter 
//   adapter.fetchCustomers()
//     .then(users => {
//       users.data.forEach(user => {
//         let newUser = new User(user, user.attributes)
//         const userContainer = document.getElementById("user-container")
//         userContainer.innerHTML += newUser.renderUser()
//       })
//       // .catch(errors => console.log("THESE ARE YOUR ERRORS", errors))
//   })
// }

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}