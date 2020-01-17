const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secret = require('../config/index').secret;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true
    },
    name: String,
    hash: String,
    salt: String
}, {timestamps: true});

// usernames and emails must be unique
userSchema.plugin(uniqueValidator, { message: "is already taken."});

// set password
userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
}

// validate password
userSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
    return this.hash === hash;
}

// generate jsonwebtoken
userSchema.methods.generateJWT = function() {
    let today = new Date();
    let exp = new Date(today);

    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, 
    secret);
}

// pass user json to frontend only if auth
userSchema.methods.toAuthJSON = function() {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        name: this.name
    }
}

userSchema.methods.toProfileJSONFor = function() {
    return {
        username: this.username,
        name: this.name
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;