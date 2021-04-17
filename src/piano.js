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
  <div id="show-piano-${this.id}">
  <a href="javascript:hidePiano(${this.id}, true)">Show Piano</a>
  </div>
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

static addPiano(first, last) {
  return `
  <form user-id="${this.user_id}">
  <h3>Add a Piano for ${first} ${last}!</h3>
  <form-group>
  <label for="make">Make</label>
  ̰<input type="text" class="form-control" id="make" placeholder="make" value="" name="make">
 </form-group> 
 <br>
 <form-group>
 <label for="model">Model</label>
 <input type="text" class="form-control" id="model" placeholder="model" value="" name="model">
 </form-group>
 <br>
 <form-group> 
 <label for="serial">Serial</label>
 <input type="text" class="form-control" id="serial" placeholder="serial" value="" name="serial">
 </form-group> 
 <br>
 <form-group>
 <label for="age">Age</label>
 <input type="text" class="form-control" id="age" placeholder="age" value="" name="age">
 </form-group> 
 <br>
 <form-group>
 <label for="notes">Notes</label>
  <textarea type="text" class="form-control" id="notes" placeholder="notes" value="" name="notes"></textarea>
  </form-group>
  <br>
  <form-group>
  <label for="image-url">Image url</label>
  <input type="text" class="form-control" id="image_url" placeholder="image_link" rows="8" cols="80" value="" name="image_url">
  <br>
  </form-group>
  <input type="submit" value="Add Piano" name="add piano">
  </form>
  `
}
}

Piano.all = []