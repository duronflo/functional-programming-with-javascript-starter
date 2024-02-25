const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// GET route
app.get('/', (req, res) => {
    res.json({ "message": "You successfully made a GET request!" });
});

// POST route
app.post('/', (req, res) => {
    res.json({ "message": `You successfully made a POST request, ${req.body.name}!` });
});

// PUT route 
app.put('/', (req, res) => {
    res.json({ "message": "You successfully made a PUT request!" });
});

// DELETE route
app.delete('/', (req, res) => {
    res.json({ "message": "You successfully made a DELETE request!" });
});

// Long running request route
app.get('/longexample', (req, res) => {
    const response = () => {
        res.json({ "message": "This request took 2 seconds" })
    }
    setTimeout(response, 2000)
});

// Long running request route
app.get('/nopage', (req, res) => {
    res.statusCode(400)
});


// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});