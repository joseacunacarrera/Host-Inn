const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cliente', {
    idCliente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombreUsuario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contrasenna: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    idNacionalidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Nacionalidad',
        key: 'idNacionalidad'
      }
    }
  }, {
    sequelize,
    tableName: 'Cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
      {
        name: "fk_Cliente_Nacionalidad1_idx",
        using: "BTREE",
        fields: [
          { name: "idNacionalidad" },
        ]
      },
    ]
  });
};
