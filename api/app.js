const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// load the mongoose models
const { Task, Action } = require('./db/models');

/* LOAD MIDDLEWARE */
// pass the request body of http request
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

/* ** */

/* ROUTE HANDLERS */

/* TASKS ROUTES */

/*
* GET /
*  base test route
*/
app.get('/', (req, res) => {
    res.send('App here');
})

/*
* GET /tasks
* Purpose: get all tasks
*/
app.get('/tasks', (req, res) => {
    // return an array of all tasks in the database
    Task.find({}).then((tasks) => {
        res.send(tasks);
    });
})

/*
* POST /tasks
* Purpose: create a task
*/
app.post('/tasks', (req, res) => {
    // create new task and return the new task document (with id) - format JSON request body
    let title = req.body.task.title;
    let description = req.body.task.description;
    debugger;

    let newTask = new Task({
        title,
        description
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    });
})

/*
* PATCH /tasks/:id
* Purpose: update a task
*/
app.patch('/tasks/:id', (req, res) => {
    // find task by id and update the object with received object in body
    Task.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/*
* Delete /tasks/:id
* Purpose: delete a task
*/
app.delete('/tasks/:id', (req, res) => {
    // delete selected task
    // TODO - create soft delete
    Task.findOneAndRemove({ _id: req.params.id }).then((removedListDoc) => {
        res.send(removedListDoc);
    });
})

/* ACTIONS ROUTES */

/*
* GET /tasks/:id/actions
* Purpose: get all actions for selected task
*/
app.get('/tasks/:taskId/actions', (req, res) => {
    // return an array of all actions for selected task in the database
    Action.find({
        _taskId: req.params.taskId
    }).then((actions) => {
        res.send(actions);
    });
})

/*
* GET /tasks/:taskId/actions/:actionId
* Purpose: get an specific action with id
*/
app.get('/tasks/:taskId/actions/:actionId', (req, res) => {
    // find action by id and return it
    Action.findOne({ 
        _id: req.params.actionId,
        _taskId: req.params.taskId
    }).then((action) => {
        res.send(action);
    });
});

/*
* POST /tasks/:id/actions
* Purpose: create new action for selected task
*/
app.post('/tasks/:taskId/actions', (req, res) => {
    // create new action for selected task and return it on success
    let newAction = new Action({
        title: req.body.action.title,
        _taskId: req.params.taskId
    });
    newAction.save().then((newActionDoc) => {
        res.send(newActionDoc);
    });
})

/*
* PATCH /tasks/:taskId/actions/:actionId
* Purpose: update an action 
*/
app.patch('/tasks/:taskId/actions/:actionId', (req, res) => {
    // find action by id and update the object with received object in body
    Action.findOneAndUpdate({ 
        _id: req.params.actionId,
        _taskId: req.params.taskId
    }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/*
* Delete /tasks/:taskId/actions/:actionId
* Purpose: delete a task
*/
app.delete('/tasks/:taskId/actions/:actionId', (req, res) => {
    // delete selected task
    // TODO - create soft delete
    Action.findOneAndRemove({ 
        _id: req.params.actionId,
        _taskId: req.params.taskId 
    }).then((removedActionDoc) => {
        res.send(removedActionDoc);
    });
})




app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
