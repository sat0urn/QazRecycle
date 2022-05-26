const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActivated: {
        type: String,
        required: true,
        default: false
    },
    activationLink: {
        type: String
    },
    role: {
        type: String,
        default: "USER"
    },
})

let UserModel = new mongoose.model('User', UserSchema)

module.exports = UserModel;






