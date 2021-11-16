const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reservacion', {
    idReservacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechaEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaSalida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cantidadHabitaciones: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadAdultos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadNinnos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cliente',
        key: 'idCliente'
      }
    },
    idHotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hotel',
        key: 'idHotel'
      }
    },
    idEstadoPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EstadoPago',
        key: 'idEstadoPago'
      }
    }
  }, {
    sequelize,
    tableName: 'Reservacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReservacion" },
        ]
      },
      {
        name: "fk_Reservacion_Cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
      {
        name: "fk_Reservacion_Hotel1_idx",
        using: "BTREE",
        fields: [
          { name: "idHotel" },
        ]
      },
      {
        name: "fk_Reservacion_EstadoPago1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstadoPago" },
        ]
      },
    ]
  });
};
