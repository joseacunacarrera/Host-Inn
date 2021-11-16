const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TipoHabitacion', {
    idTipoHabitacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tamanno: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    numeroCamas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precioTotal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    facilidades: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    capacidadMaxima: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TipoHabitacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTipoHabitacion" },
        ]
      },
    ]
  });
};
