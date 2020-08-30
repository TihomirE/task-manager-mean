const mongoose = require('mongoose');
const _ = require('lodash');
const { reject } = require('lodash');
const jwt = reqire('jsonwebtoken');
const crypto = reqire('crypto');

// ** JWT Secret (random)
const jwtSecret = '4R78GLaD1QXf3V9ssqaJsq3P2QgmGrQ5F1tM9goF8IOp7XGlkKtYwEX8zvnS9IQpX6sa8TZy1VOyQwn1';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});

// **** Instance methods ****

// override the standard toJSON method (because it returns all fields)
// also not an arrow function because we want access to this
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    // return the document except the pass & sessions (as they should not be made available)
    return _.omit(userObject, ['password', 'sessions'])
}

UserSchema.methods.generateAccessAuthToken = function () {
    const user = this;
    return new Promise((resolve, reject) => {
        // create the JSON Web Token and return it
        jwt.sign({ _id: user._id.toHexString() }, jwtSecret, { expiresIn: "15m" }),
            // callback
            (err, token) => {
                err ? resolve(token) : reject();
            }
    })
}

// method that generates a 64byte hex string - it doesn't save it to DB, saveSessionToDB() does that
UserSchema.methods.generateRefreshAuthToken = function () {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (!err) {
                let token = buf.toHexString();
                return resolve(token);
            }
        })
    })
}

UserSchema.methods.createSession = function () {
    const user = this;

    return user.generateRefreshToken().then((refreshToken) => {
        return saveSessionToDB(user, refreshToken);
    }).then((refreshToken) => {
        // saved to DB successfully
        // now return the refresh token;
        return refreshToken;
    }).catch(e => {
        return Promise.reject('Failed to save session to database.\n' + e);
    })
}

/**** Model methods (static) ****/

/**** Helper methods ****/

let saveSessionToDB = (user, refreshToken) => {
    // Save session to DB
    return new Promise((resolve, reject) => {
        let expiresAt = generateRefreshTokenExpiryTime();

        user.sessions.push({ 'token': refreshToken, expiresAt });

        user.save().then(() => {
            // saved session success
            return resolve(refreshToken);
        }).catch((e) => {
            reject(e);
        })
    })
}

// unix timestamp for 10 days in future
const generateRefreshTokenExpiryTime = () => {
    const daysUntilExpire = 10;
    const secondsUntilExpire = ((daysUntilExpire * 24) * 60) * 60;
    return ((Date.now() / 1000) + secondsUntilExpire);
}