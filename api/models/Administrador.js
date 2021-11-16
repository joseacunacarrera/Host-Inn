const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Administrador', {
    idAdministrador: {
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
    numeroIdentificacion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rol',
        key: 'idRol'
      }
    }
  }, {
    sequelize,
    tableName: 'Administrador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAdministrador" },
        ]
      },
      {
        name: "fk_Administrador_Rol_idx",
        using: "BTREE",
        fields: [
          { name: "idRol" },
        ]
      },
    ]
  });
};
