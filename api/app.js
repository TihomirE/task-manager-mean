const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// load the mongoose models
const { Task, Action, User } = require('./db/models');

/* MIDDLEWARE  */

// Load middleware
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

// check whether the request has a valid JWT access token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}

// Verify Refresh Token Middleware (which will be verifying the session)
let verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    console.log(_id + " + " + refreshToken);

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }

        // the user was found
        // therefore the refresh token exists in the database - but we still have to check if it has expired or not
        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}

/* END MIDDLEWARE  */

/* ** */

/* ROUTE HANDLERS */

/* TASKS ROUTES */

/*
* GET /
*  base test route
*/
// app.get('/', (req, res) => {
//     res.send('App here');
// })

/*
* GET /tasks
* Purpose: get all tasks
*/
app.get('/tasks', authenticate, (req, res) => {
    // return an array of all tasks in the database that are assigned to current user
    Task.find({
        // from the model : from the success authenticate
        _userId: req.user_id
    }).then((tasks) => {
        res.send(tasks);
    });
})

/*
* POST /tasks
* Purpose: create a task
*/
app.post('/tasks', authenticate, (req, res) => {
    // create new task and return the new task document (with id) - format JSON request body
    let title = req.body.task.title;
    let description = req.body.task.description;

    let newTask = new Task({
        title,
        description,
        _userId: req.user_id
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    });
})

/*
* PATCH /tasks/:id
* Purpose: update a task
*/
app.patch('/tasks/:id', authenticate, (req, res) => {
    // find task by id and userId and update the object with received object in body
    Task.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

/*
* Delete /tasks/:id
* Purpose: delete a task
*/
app.delete('/tasks/:id', authenticate, (req, res) => {
    // delete selected task
    // TODO - create soft delete
    Task.findOneAndRemove({
        _id: req.params.id,
        _userId: req.user_id
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);

        // also remove the actions connected with the task
        deleteActionsFromTask(removedTaskDoc._id);
    });
})

/* ACTIONS ROUTES */

/*
* GET /tasks/:id/actions
* Purpose: get all actions for selected task
*/
app.get('/tasks/:taskId/actions', authenticate, (req, res) => {
    // return an array of all actions for selected task in the database
    // no need to match to user since it's done for list which is above(parent) of the action
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
app.get('/tasks/:taskId/actions/:actionId', authenticate, (req, res) => {
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
app.post('/tasks/:taskId/actions', authenticate, (req, res) => {
    // check if the user is the task owner in order to create actions
    Task.findOne({
        _id: req.params.taskId,
        _userId: req.user_id
    }).then((task) => {
        if (task) {
            // task object with the specified conditions was found
            // therefore the currently authenticated user can create new actions
            return true;
        }
        // else - the task object is undefined
        return false;
    }).then((canCreateTask) => {
        if (canCreateTask) {
            // create new action for selected task and return it on success
            let newAction = new Action({
                title: req.body.action.title,
                _taskId: req.params.taskId
            });
            newAction.save().then((newActionDoc) => {
                res.send(newActionDoc);
            });
        } else {
            res.sendStatus(404);
        }
    })
})

/*
* PATCH /tasks/:taskId/actions/:actionId
* Purpose: update an action 
*/
app.patch('/tasks/:taskId/actions/:actionId', authenticate, (req, res) => {

    Task.findOne({
        _id: req.params.taskId,
        _userId: req.user_id
    }).then((task) => {
        if (task) {
            // task object with the specified conditions was found
            // therefore the currently authenticated user can make updates to tasks within this list
            return true;
        }

        // else - the task object is undefined
        return false;
    }).then((canUpdateActions) => {
        if (canUpdateActions) {
            // the currently authenticated user can update actions
            Action.findOneAndUpdate({
                _id: req.params.actionId,
                _taskId: req.params.taskId
            }, {
                $set: req.body
            }
            ).then(() => {
                res.send({ message: 'Updated successfully.' })
            })
        } else {
            res.sendStatus(404);
        }
    })
});

/*
* Delete /tasks/:taskId/actions/:actionId
* Purpose: delete a task
*/
app.delete('/tasks/:taskId/actions/:actionId', authenticate, (req, res) => {
    Task.findOne({
        _id: req.params.taskId,
        _userId: req.user_id
    }).then((task) => {
        if (task) {
            // task object with the specified conditions was found
            // therefore the currently authenticated user can make updates to tasks within this list
            return true;
        }

        // else - the task object is undefined
        return false;
    }).then((canDeleteActions) => {
        if (canDeleteActions) {
            // delete selected task
            // TODO - create soft delete
            Action.findOneAndRemove({
                _id: req.params.actionId,
                _taskId: req.params.taskId
            }).then((removedActionDoc) => {
                res.send(removedActionDoc);
            });
        } else {
            res.sendStatus(404);
        }
    })

})


/* USER ROUTES */

/**
 * POST /users
 * Purpose: Sign up
 */
app.post('/users/signup', (req, res) => {
    // User sign up

    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        // Session created successfully - refreshToken returned.
        // now we geneate an access auth token for the user

        return newUser.generateAccessAuthToken().then((accessToken) => {
            // access auth token generated successfully, now we return an object containing the auth tokens
            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
    })
})


/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            // Session created successfully - refreshToken returned.
            // now we geneate an access auth token for the user

            return user.generateAccessAuthToken().then((accessToken) => {
                // access auth token generated successfully, now we return an object containing the auth tokens
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            // Now we construct and send the response to the user with their auth tokens in the header and the user object in the body
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
    }).catch((e) => {
        res.status(400).send(e);
    });
})

/**
 * GET /users/me/access-token
 * Purpose: generates and returns an access token
 */
app.get('/users/active/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        // sending the accessToken both in header and body, not needed like that but on the client side we can decide which one to read
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})

/*
** HELPER METHODS **
*/

let deleteActionsFromTask = (_taskId) => {
    Action.deleteMany({
        _taskId
    }).then(() => {
        // just for testing check
        console.log("Actions from task: " + _taskId + " were deleted!");
    });
}

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
