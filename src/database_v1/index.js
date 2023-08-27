const dbConfig = require("../config/db.config.js");


const { mongoose } = require("mongoose");
// mongoose.connect(dbConfig.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("Database Connected"))
//     .catch((err) => console.log(err));

const db = {};
mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.user = require("./models/User");
module.exports = db;