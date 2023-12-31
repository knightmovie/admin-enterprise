const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        name: String,
        // role: String,
    }),
    'users'
);

module.exports = User;