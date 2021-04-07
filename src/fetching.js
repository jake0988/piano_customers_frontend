class Fetching {
  constructor() {
    this.adapter = new Adapter;
  }

getPianosFetch(user) {
  this.adapter.fetchGetPianos(user)
  .then(pianos => {
    createPianoForm(user)
    showPianos(pianos) 
    })
    .catch((err) => console.log("Your errors", err))
}

  getFetch() {
    this.adapter.fetchCustomers()
    .then(users => {
      users.data.forEach(user => {
        let newUser = new User(user, user.attributes)
        const userContainer = document.getElementById("user-container")
        userContainer.innerHTML += newUser.renderUser()
      })
    })
    .catch(err => console.log("Your errors", err));
  }

  patchFetch(id, first_name, last_name, address, phone_number, number_of_pianos, notes) {
    const bodyData = {first_name, last_name, address, phone_number, number_of_pianos, notes}
    this.adapter.fetchPatchCustomer(id, bodyData)
    .then(jsonData => {
      console.log(jsonData)
      const user = User.findUser(id)
      location.reload()
      // document.getElementById("user-container").innerHTML = ""
    })
    .catch(err => console.log("Your errors", err));
  }

  postFetch(first_name, last_name, address, phone_number, number_of_pianos, technician_notes) {
    const bodyData = {first_name, last_name, address, phone_number, number_of_pianos, technician_notes};
    this.adapter.fetchPostCustomer(bodyData)
  .then(user => {
    const rUser = user.data;
    const newUser = new User(rUser, rUser.attributes);
    document.getElementById("user-container").innerHTML += newUser.renderUser();
    // location.reload()
  })
  .catch(err => console.log("Your errors", err));
  }

  postPianoFetch(user_id, make, model, serial, age, private_technical_notes, image_url) {
      const bodyData = {make, model, serial, age, private_technical_notes, image_url, user_id};
      this.adapter.fetchPostPiano(user_id, bodyData)
    .then(piano => {
      const rPiano = piano.data;
      const newPiano = new Piano(rPiano, rPiano.attributes);
      document.getElementById("piano-container").innerHTML += newPiano.renderPiano();
      // debugger
      // location.reload();
  })
    .catch(err => console.log("Your errors", err))
}
}

