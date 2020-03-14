const express = require('express');
const app = express();

// load the mongoose models
const { Task, Action } = require('./db/models');

/* ROUTE HANDLERS */

/* LIST ROUTES */

/*
* GET /tasks
* Purpose: get all tasks
*/
app.get('/tasks', (req, res) => {
    // return an array of all tasks in the database
})

/*
* POST /tasks
* Purpose: create a task
*/
app.post('/tasks', (req, res) => {
    // create new task and return the new task document (with id) - format JSON request body
})

/*
* PATCH /tasks/:id
* Purpose: update a task
*/
app.patch('/tasks/:id', (req, res) => {
    // update selected task
})

/*
* Delete /tasks/:id
* Purpose: delete a task
*/
app.delete('/tasks/:id', (req, res) => {
    // delete selected task
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
