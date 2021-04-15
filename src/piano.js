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
  <div id=piano-${this.id}>
  <div>
    <p>Piano Owner: ${this.first_name} ${this.last_name}</p>
  </div>

  <div>
  <div class="media">
      <img class="mr-3" src="${this.image_url}" alt="Piano picture">
    </div>
  <div class="media-body">
    <ul>
      <li>Piano Make: ${this.make}</li>
      <li>Piano Model: ${this.model}</li>
    <li>Piano Serial Number: ${this.serial}</li>
    <li>Piano Age: ${this.age}</li>
    
    <li>Piano Notes: ${this.private_technical_notes}</li>
    </ul>
    <a href="javascript:hidePiano(${this.id}, false)">Hide Piano</a>
    <input data-id="${this.id}" type="submit" value="Delete Piano">
    <div
    <hr>
  </div>
  </div>
  </div>
  `
}

static addPiano() {
  return `
  <form user-id="${this.user_id}">
  <h3>Add a Piano!</h3>
  ̰<input type="text" id="make" placeholder="make" value="" name="make">
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