const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Habitacion', {
    idHabitacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    idTipoHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoHabitacion',
        key: 'idTipoHabitacion'
      }
    },
    idHotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hotel',
        key: 'idHotel'
      }
    }
  }, {
    sequelize,
    tableName: 'Habitacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHabitacion" },
        ]
      },
      {
        name: "fk_Habitacion_TipoHabitacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoHabitacion" },
        ]
      },
      {
        name: "fk_Habitacion_Hotel1_idx",
        using: "BTREE",
        fields: [
          { name: "idHotel" },
        ]
      },
    ]
  });
};
