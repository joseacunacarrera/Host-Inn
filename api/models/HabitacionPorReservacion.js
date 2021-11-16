const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HabitacionPorReservacion', {
    idReservacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reservacion',
        key: 'idReservacion'
      }
    },
    idHabitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Habitacion',
        key: 'idHabitacion'
      }
    }
  }, {
    sequelize,
    tableName: 'HabitacionPorReservacion',
    timestamps: false,
    indexes: [
      {
        name: "fk_HabitacionPorReservacion_Reservacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idReservacion" },
        ]
      },
      {
        name: "fk_HabitacionPorReservacion_Habitacion1_idx",
        using: "BTREE",
        fields: [
          { name: "idHabitacion" },
        ]
      },
    ]
  });
};
