class App {
  constructor() {
    this.fetching = new Fetching;
  }

    eventFormHandler(e) {
      const userId = document.querySelector('#data-id')
      const inputFirstName = document.querySelector('#input-first-name').value
      const inputLastName = document.querySelector('#input-last-name').value
      const inputEmail = document.querySelector('#input-email').value
      const inputAddress = document.querySelector('#input-address').value
      const inputPhoneNumber = document.querySelector('#input-phone-number').value
      const inputNumberOfPianos = document.querySelector('#input-number-of-pianos').value
      const inputNotes = document.querySelector('#input-notes').value
      const fetching = new Fetching
      fetching.postFetch(inputFirstName, inputLastName, inputAddress, inputPhoneNumber,inputNumberOfPianos, inputNotes)
  }
  
    pianoEventFormHandler(user) {
      const container = document.querySelector('div.form-container')
      const user_id = user
      const make = container.querySelector('#make').value
      const model = container.querySelector('#model').value
      const serial = container.querySelector('#serial').value
      const age = container.querySelector('#age').value
      const notes = container.querySelector('#notes').value
      const image_url = container.querySelector('#image_url').value
      this.fetching.postPianoFetch(user_id, make, model, serial, age, notes, image_url)
  }
 
    patchEventFormHandler(e) {
      e.preventDefault()
      const id = e.target.dataset.id
      const patchContainer = document.querySelector('#user-patch-form')
      const inputFirstName = patchContainer.querySelector('#fname').value
      const inputLastName = patchContainer.querySelector('#lname').value
      const inputEmail = patchContainer.querySelector('#email').value
      const inputAddress = patchContainer.querySelector('#address').value
      const inputPhoneNumber = patchContainer.querySelector('#pnumber').value
      const inputNumberOfPianos = patchContainer.querySelector('#npianos').value
      const inputNotes = patchContainer.querySelector('#notes').value
      const fetching = new Fetching
      fetching.patchFetch(id, inputFirstName, inputLastName, inputAddress, inputPhoneNumber,inputNumberOfPianos, inputNotes)
  }
}