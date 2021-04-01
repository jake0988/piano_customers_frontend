class User {
  constructor(user, usersAttributes) {
    this.id = user.id
    this.first_name = usersAttributes.first_name
    this.last_name = usersAttributes.last_name
    this.address = usersAttributes.address
    this.phone_number = usersAttributes.phone_number
    this.notes = usersAttributes.notes
    this.number_of_pianos = usersAttributes.pianos.length
    User.all.push(this)
  }

    renderUser() {
    return `
    <div data-id=${this.id}>
    <h3>Name: ${this.first_name} ${this.last_name}</h3>
    <p>Address: ${this.address}</p>
    <p>Number Of Pianos: <a href="javascript:getPianos(${this.id}, ${this.number_of_pianos}) "id=number-of-pianos>${this.number_of_pianos}</a></p>
    <p>Phone Number: ${this.phone_number}</p>
    <p>Technical Notes: ${this.technician_notes}</p>
   <button class="btn" data-id=${this.id} type="submit" name="edit">edit</button>
   <button class="dlt-btn" data-id=${this.id} type="submit" name="delete">delete</button>
    <hr>
   </div>`
  }

  renderUpdateUser() {
    return `
    <form data-id=${this.id} id="user-patch-form">
    <label for="fname">First Name:</label>
      <input id="fname" type="text" value=${this.first_name} />
    <br>
    <label for="lname">Last Name:</label>
      <input id="lname" type="text" value=${this.last_name} />
    <br>
    <label for="address">Address:</label>
    <br>
      <input id="address" type="text" value=${this.address}
    <br>
    <label for="npianos">Number of Pianos:</label>
      <input id="npianos" type="text" value=${this.number_of_pianos}
    <br>
    <label for="pnumber">Phone Number:</label>
      <input id="pnumber" type="text" value=${this.phone_number}
    <br>
    <label for="notes">Notes:</label>
      <input id="notes" type="text" value=${this.technician_notes}
    <br>
    <br>
      <input data-id=${this.id} type="submit" name="edit">
    <hr>
   </form>`
  }

  static findUser(id) {
    return User.all.find(user => user.id === id)
  }
}

User.all = []