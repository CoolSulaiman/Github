const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'ameensab', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
