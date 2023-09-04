const dbConfig = require("../config/db.config.js");


const { mongoose } = require("mongoose");
const db = {};
mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.user = require("./models/User");
db.authUser = require("./models/AuthUser");
db.authUser = require("./models/Admin");


module.exports = db;