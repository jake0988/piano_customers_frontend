class User {
  constructor(user, usersAttributes) {
    this.id = user.id
    this.first_name = usersAttributes.first_name
    this.last_name = usersAttributes.last_name
    this.address = usersAttributes.address
    this.phone_number = usersAttributes.phone_number
    this.notes = usersAttributes.notes
    this.number_of_pianos = usersAttributes.number_of_pianos
    User.all.push(this)
  }

    renderUser() {
    return `
    <div data-id=${this.id}>
    <h3>Name: ${this.first_name} ${this.last_name}</h3>
    <p>Address: ${this.address}</p>
    <p>Number Of Pianos: ${this.number_of_pianos}</p>
    <p>Phone Number: ${this.phone_number}</p>
    <p>Technical Notes: ${this.technician_notes}</p>
   <button class="btn" data-id=${this.id} type="submit" name="edit">edit</button>
    <hr>
   </div>`
  }

  renderUpdateUser() {
    return `
    <form data-id=${this.id}>
    <label="First Name">
    <p>
      <input type="text" value=${this.first_name} />
      <input type="text" value=${this.last_name} />
    </p>
    <p><input type="text" value=${this.number_of_pianos}</p>
    <p><input type="text" value=${this.phone_number}</p>
    <p><input type="text" value=${this.technician_notes}</p>
   <button data-id=${this.id} input type="submit" name="edit">edit</button>
    <hr>
   </form>`
  }

  static findUser(id) {
    return User.all.find(user => user.id === id)
  }
}

User.all = []