const mongoose = require("mongoose");

const Admin = mongoose.model(
    "Admin",
    new mongoose.Schema({
        email: String,
        password: String,
        name: String,
        username: String
    }),
    'admin'
);

module.exports = Admin;