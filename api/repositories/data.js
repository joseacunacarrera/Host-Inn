const { Sequelize } = require('sequelize')
var initModels = require("../models/init-models");

var sequelize = new Sequelize('HostInn_Database', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
var models = initModels(sequelize)

module.exports = models