const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('proyectodb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}
