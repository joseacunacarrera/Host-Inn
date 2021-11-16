const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdministradoresPorHotel', {
    idHotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hotel',
        key: 'idHotel'
      }
    },
    idAdministrador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Administrador',
        key: 'idAdministrador'
      }
    }
  }, {
    sequelize,
    tableName: 'AdministradoresPorHotel',
    timestamps: false,
    indexes: [
      {
        name: "fk_AdministradoresPorHotel_Hotel1_idx",
        using: "BTREE",
        fields: [
          { name: "idHotel" },
        ]
      },
      {
        name: "fk_AdministradoresPorHotel_Administrador1_idx",
        using: "BTREE",
        fields: [
          { name: "idAdministrador" },
        ]
      },
    ]
  });
};
