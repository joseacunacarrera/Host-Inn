const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pago', {
    idPago: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    fechaPago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idReservacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reservacion',
        key: 'idReservacion'
      }
    }
  }, {
    sequelize,
    tableName: 'Pago',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPago" },
        ]
      },
      {
        name: "fk_Pago_Reservacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idReservacion" },
        ]
      },
    ]
  });
};
