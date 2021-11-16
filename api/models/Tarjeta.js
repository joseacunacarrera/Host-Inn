const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tarjeta', {
    idTarjeta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numeroTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fechaVencimiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CCV: {
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
    idTipoTarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TipoTarjeta',
        key: 'idTipoTarjeta'
      }
    }
  }, {
    sequelize,
    tableName: 'Tarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTarjeta" },
        ]
      },
      {
        name: "fk_Tarjeta_Cliente1_idx",
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
      {
        name: "fk_Tarjeta_TipoTarjeta1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoTarjeta" },
        ]
      },
    ]
  });
};
