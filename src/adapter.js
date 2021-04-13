class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/users';
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  fetchRenderAdmin() {
    fetch('http://localhost:3000/api/v1/profile', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
  },
  body: JSON.stringify(body)
})
  .then(r => r.json())

  .then(alert(`Welcome back ${json.admin.data.attributes.username}`))
}


  fetchCreateAdmin(username, email, password) {
    const body = {admin: {username, email, password}}
    // debugger
    fetch('http://localhost:3000/api/v1/admins', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(body)
})
  .then(r => {  
    debugger
    return r.json().catch(err => console.log("this errr", err))})
  
  .then(json => {
    debugger
  localStorage.setItem('jwt_token', json.jwt)
  this.fetchRenderAdmin()
  })
  .catch(err => console.log("YOUR ERRORS", err))
}
  
  
  fetchLoginForm(uName, pWord) {
    const body = {admin: {uName, pWord}}
    fetch('http://localhost:3000/api/v1/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // Authorization: `Bearer <token>`
  },
  body: JSON.stringify(body)
})
  .then(r => r.json())

  .then(json => {
    console.log(json)
  })
  
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

