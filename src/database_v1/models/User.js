const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.NUMBER
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    });
};