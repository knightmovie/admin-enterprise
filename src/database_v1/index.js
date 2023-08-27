const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Server=localhost;Database=master;Trusted_Connection=True;');


// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

const db = {};

db.sequelize = sequelize;

db.user = require("./models/User")(sequelize);

module.exports = db;

//
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     port: dbConfig.PORT,
//     dialect: dbConfig.dialect,
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle,
//     },
// });
//
// const db = {};
//
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
//
// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
//
// module.exports = db;