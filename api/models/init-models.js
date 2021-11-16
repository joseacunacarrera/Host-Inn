var DataTypes = require("sequelize").DataTypes;
var _Administrador = require("./Administrador");
var _AdministradoresPorHotel = require("./AdministradoresPorHotel");
var _Cliente = require("./Cliente");
var _EstadoPago = require("./EstadoPago");
var _Habitacion = require("./Habitacion");
var _HabitacionPorReservacion = require("./HabitacionPorReservacion");
var _Hotel = require("./Hotel");
var _Nacionalidad = require("./Nacionalidad");
var _Pago = require("./Pago");
var _Reservacion = require("./Reservacion");
var _Rol = require("./Rol");
var _Tarjeta = require("./Tarjeta");
var _TipoHabitacion = require("./TipoHabitacion");
var _TipoTarjeta = require("./TipoTarjeta");

function initModels(sequelize) {
  var Administrador = _Administrador(sequelize, DataTypes);
  var AdministradoresPorHotel = _AdministradoresPorHotel(sequelize, DataTypes);
  var Cliente = _Cliente(sequelize, DataTypes);
  var EstadoPago = _EstadoPago(sequelize, DataTypes);
  var Habitacion = _Habitacion(sequelize, DataTypes);
  var HabitacionPorReservacion = _HabitacionPorReservacion(sequelize, DataTypes);
  var Hotel = _Hotel(sequelize, DataTypes);
  var Nacionalidad = _Nacionalidad(sequelize, DataTypes);
  var Pago = _Pago(sequelize, DataTypes);
  var Reservacion = _Reservacion(sequelize, DataTypes);
  var Rol = _Rol(sequelize, DataTypes);
  var Tarjeta = _Tarjeta(sequelize, DataTypes);
  var TipoHabitacion = _TipoHabitacion(sequelize, DataTypes);
  var TipoTarjeta = _TipoTarjeta(sequelize, DataTypes);

  AdministradoresPorHotel.belongsTo(Administrador, { as: "idAdministrador_Administrador", foreignKey: "idAdministrador"});
  Administrador.hasMany(AdministradoresPorHotel, { as: "AdministradoresPorHotels", foreignKey: "idAdministrador"});
  Reservacion.belongsTo(Cliente, { as: "idCliente_Cliente", foreignKey: "idCliente"});
  Cliente.hasMany(Reservacion, { as: "Reservacions", foreignKey: "idCliente"});
  Tarjeta.belongsTo(Cliente, { as: "idCliente_Cliente", foreignKey: "idCliente"});
  Cliente.hasMany(Tarjeta, { as: "Tarjeta", foreignKey: "idCliente"});
  Reservacion.belongsTo(EstadoPago, { as: "idEstadoPago_EstadoPago", foreignKey: "idEstadoPago"});
  EstadoPago.hasMany(Reservacion, { as: "Reservacions", foreignKey: "idEstadoPago"});
  HabitacionPorReservacion.belongsTo(Habitacion, { as: "idHabitacion_Habitacion", foreignKey: "idHabitacion"});
  Habitacion.hasMany(HabitacionPorReservacion, { as: "HabitacionPorReservacions", foreignKey: "idHabitacion"});
  AdministradoresPorHotel.belongsTo(Hotel, { as: "idHotel_Hotel", foreignKey: "idHotel"});
  Hotel.hasMany(AdministradoresPorHotel, { as: "AdministradoresPorHotels", foreignKey: "idHotel"});
  Habitacion.belongsTo(Hotel, { as: "idHotel_Hotel", foreignKey: "idHotel"});
  Hotel.hasMany(Habitacion, { as: "Habitacions", foreignKey: "idHotel"});
  Reservacion.belongsTo(Hotel, { as: "idHotel_Hotel", foreignKey: "idHotel"});
  Hotel.hasMany(Reservacion, { as: "Reservacions", foreignKey: "idHotel"});
  Cliente.belongsTo(Nacionalidad, { as: "idNacionalidad_Nacionalidad", foreignKey: "idNacionalidad"});
  Nacionalidad.hasMany(Cliente, { as: "Clientes", foreignKey: "idNacionalidad"});
  HabitacionPorReservacion.belongsTo(Reservacion, { as: "idReservacion_Reservacion", foreignKey: "idReservacion"});
  Reservacion.hasMany(HabitacionPorReservacion, { as: "HabitacionPorReservacions", foreignKey: "idReservacion"});
  Pago.belongsTo(Reservacion, { as: "idReservacion_Reservacion", foreignKey: "idReservacion"});
  Reservacion.hasMany(Pago, { as: "Pagos", foreignKey: "idReservacion"});
  Administrador.belongsTo(Rol, { as: "idRol_Rol", foreignKey: "idRol"});
  Rol.hasMany(Administrador, { as: "Administradors", foreignKey: "idRol"});
  Habitacion.belongsTo(TipoHabitacion, { as: "idTipoHabitacion_TipoHabitacion", foreignKey: "idTipoHabitacion"});
  TipoHabitacion.hasMany(Habitacion, { as: "Habitacions", foreignKey: "idTipoHabitacion"});
  Tarjeta.belongsTo(TipoTarjeta, { as: "idTipoTarjeta_TipoTarjetum", foreignKey: "idTipoTarjeta"});
  TipoTarjeta.hasMany(Tarjeta, { as: "Tarjeta", foreignKey: "idTipoTarjeta"});

  return {
    Administrador,
    AdministradoresPorHotel,
    Cliente,
    EstadoPago,
    Habitacion,
    HabitacionPorReservacion,
    Hotel,
    Nacionalidad,
    Pago,
    Reservacion,
    Rol,
    Tarjeta,
    TipoHabitacion,
    TipoTarjeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
