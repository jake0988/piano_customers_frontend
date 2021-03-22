const endPoint = "http://localhost:3000/api/v1/users"

document.addEventListener('DOMContentLoaded', function () {
    console.log("loaded")
    fetch(endPoint)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
)