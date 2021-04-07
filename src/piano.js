class Piano {
  constructor(piano, pianoAttributes) {
    this.id = piano.id;
    this.model = pianoAttributes.model;
    this.make = pianoAttributes.make;
    this.serial = pianoAttributes.serial;
    this.age = pianoAttributes.age;
    this.private_technical_notes = pianoAttributes.private_technical_notes;
    this.image_url = pianoAttributes.image_url;
    this.user_id = pianoAttributes.user_id;
    this.first_name = pianoAttributes.user.first_name;
    this.last_name = pianoAttributes.user.last_name;
    Piano.all.push(this)
}

renderPiano() {
  return `
  <div data-id=${this.id}>
  
  <div>
    <p>Piano Owner: ${this.first_name} ${this.last_name}</p>
  </div>

  <div>
    <p>Piano Make: ${this.make}</p>
    <p>Piano Model: ${this.model}</p>
    <p>Piano Serial Number: ${this.serial}</p>
    <p>Piano Age: ${this.age}</p>
    <img src="${this.image_url}"</p>
    <p>Piano Notes: ${this.private_technical_notes}</p>
    <input data-id="${this.id}" type="submit" value="Delete">
    <hr>
  </div>
  
  </div>
  `
}

static addPiano() {
  return `
  <form user-id="${this.user_id}">
  <h3>Add a Piano!</h3>
  <input type="text" id="make" placeholder="make" value="" name="make">
  <input type="text" id="model" placeholder="model" value="" name="model">
  <input type="text" id="serial" placeholder="serial" value="" name="serial">
  <input type="text" id="age" placeholder="age" value="" name="age">
  <br>
  <textarea type="text" id="notes" placeholder="notes" value="" name="notes"></textarea>
  <br>
  <input type="text" id="image_url" placeholder="image_link" rows="8" cols="80" value="" name="image_url">
  <br>
  <input type="submit" value="Add Piano" name="add piano">
  </form>
  `
}
}

Piano.all = []