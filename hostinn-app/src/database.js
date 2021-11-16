const mysql = require('mysql2');
const { promisify } = require('util');

const { database } = require('./keys');

const db = mysql.createPool(database);

db.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Conexión a la base de datos cerrada.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Error en la cantidad de conexiones');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Conexión a la base de datos rechazada');
      }
    }
  
    if (connection) connection.release();
    console.log('Base de datos conectada');
  
    return;
});

// Promisify Pool Querys
db.query = promisify(db.query);

module.exports = db;
