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
    <h3>${this.first_name} ${this.last_name}</h3>
    <p>number_of_pianos: ${this.number_of_pianos}</p>
    <p>phone_number: ${this.phone_number}</p>
    <p>technician_notes: ${this.technician_notes}</p>
   <button data-id=${this.id} input type="submit" name="edit">edit</button>
    <hr>
   </div>`
  }
}

User.all = []