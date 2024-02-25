const fetch = require('node-fetch');
// We have set up an endpoint at http://localhost:3000. 

// Make one fetch request for each CRUD action below and print the response. 


// Create a GET request to http://localhost:3000
fetch('http://localhost:3000')
.then(response => response.json())
.catch(error => console.log(error))
.then(json => console.log(json.message))

// Create a POST request to http://localhost:3000

const postData = {name: "Florian"}
fetch('http://localhost:3000', {
    method: 'POST', // Other options: PUT, PATCH, DELETE
    mode: 'cors', // Other options are: 'no-cors', 'same-origin', and the default: 'cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)// body data type must match "Content-Type" header
  })
.then(response => response.json())
.then(json => console.log(json.message))
.catch(error => console.log(error))

// Create a PUT request to http://localhost:3000

const putData = {name: "Florian"}
fetch('http://localhost:3000', {
    method: 'PUT', // Other options: PUT, PATCH, DELETE
    mode: 'cors', // Other options are: 'no-cors', 'same-origin', and the default: 'cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)// body data type must match "Content-Type" header
  })
.then(response => response.json())
.then(json => console.log(json.message))
.catch(error => console.log(error))

// Create a DELETE request to http://localhost:3000

const deleteData = {name: "Florian"}
fetch('http://localhost:3000', {
    method: 'DELETE', // Other options: PUT, PATCH, DELETE
    mode: 'cors', // Other options are: 'no-cors', 'same-origin', and the default: 'cors'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deleteData)// body data type must match "Content-Type" header
  })
.then(response => response.json())
.then(json => console.log(json.message))
.catch(error => console.log(error))