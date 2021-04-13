const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    // const adapter = new Adapter
    // adapter.fetchAdmin()
    // const fetching = new Fetching
    // fetching.getFetch()
    createAdmin()
    // createForm()
   const addUserForm = document.querySelector('#add-user-form')
   
   addUserForm.addEventListener('submit', (e) => {
     const app = new App
     app.eventFormHandler(e)
   })
   const form = document.querySelector('.login-form');
   const adapter = new Adapter
   form.addEventListener('submit', (e) => {
    const username = form.querySelector('#username').value
    const email = form.querySelector('#email').value
    const password = form.querySelector('#password').value
    adapter.fetchCreateAdmin(username, email, password)
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
  // debugger
  const div = document.querySelector('#picture')

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

function createForm() {
  const select = document.querySelector("#pianos")
  const option = document.createElement('option')
  option.innerText = "OPTION"
  select.appendChild(option)
}

function loginForm() {
  const form = document.querySelector('.login-form');
  form.innerHTML = "";
  const username = document.createElement('input');
  username.setAttribute('placeholder', 'username');
  username.setAttribute("type", "text");
  username.setAttribute("id", "username");
  username.setAttribute("class", "form-control");
  form.appendChild(username);
  const password = document.createElement('input');
  password.setAttribute('placeholder', 'password');
  password.setAttribute("type", "text");
  password.setAttribute("id", "password");
  password.setAttribute("class", "form-control");
  form.appendChild(password);
  const button = document.createElement('input');
  button.setAttribute('type', "submit");
  button.setAttribute('value', "login");
  button.setAttribute("class", "btn btn-primary");
  button.setAttribute("id", "login");
  button.name = "submit";
  form.appendChild(button);
  form.addEventListener('click', (e) => {
    if(e.target.value === "login") {
    const uName = document.querySelector("#username").value
    const pWord = document.querySelector("#password").value
    const adapter = new Adapter
    adapter.fetchLoginForm(uName, pWord)
  }
  })
}

function createAdmin() {
  const form = document.querySelector('.login-form')
  form.addEventListener('click', (e) => {
    if (e.target.value === "submit") {
      const username = document.querySelector('#username').value
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      const adapter = new Adapter
      adapter.fetchCreateAdmin(username, email, password)
    }
  })
}

function inputAddOns(form, input, word) {
  input.setAttribute('placeholder', word);
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  form.appendChild(input);
}
  