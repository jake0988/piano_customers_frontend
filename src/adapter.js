class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }
  
  
  fetchCustomers() {
    return this.get(`${this.baseUrl}`);
  }


  fetchPostCustomer(body) {
    return this.post(`${this.baseUrl}`, body);
  }

  fetchPatchCustomer(id, body) {
    return this.patch(`${this.baseUrl}/${id}`, body);
  } 

  get(url) {
    return fetch(url).then(res => res.json());
  }

  fetchGetPianos(user_id) {
    return this.get(`${this.baseUrl}/${user_id}/pianos`);
}

  fetchPostPiano(user_id, body) {
    return this.post(`${this.baseUrl}/${user_id}/pianos`, body);
  }

  deletePiano(user, piano) {
    // const wind = window
    // if (confirmDelete(wind)) {
      this.delete(`${this.baseUrl}/${user}/pianos/${piano}`)

    .then(location.reload())
  // }
}
  
  fetchDelete(user) {
    // const wind = window
    // if (confirmDelete(wind)) {
      this.delete(`${this.baseUrl}/${user}`)

    .then(location.reload())
  // }
}


  post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => res.json())
    .catch(err => console.log("Your errors", err))
  }


  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body)
    }).then(res => res.json())
  }

  
}

