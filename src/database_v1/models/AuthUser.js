const mongoose = require("mongoose");

const AuthUser = mongoose.model(
    "AuthUser",
    new mongoose.Schema({
        email: String,
        token: String,
    }),
    'auth_user'
);

module.exports = AuthUser;