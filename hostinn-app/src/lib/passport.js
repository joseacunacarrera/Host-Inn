// En este archivo vamos a definir los métodos de autenticación de sistema

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Necesitamos la base de datos
const db = require('../database');

const helpers = require('./helpers');

passport.use('local.login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, username, password, done) => {
    const query = 'SELECT * FROM cliente WHERE nombreUsuario = ?'
    const rows = await db.query(query, [username]);
    if (rows.length > 0) {
        const client = rows[0];
        const isValid = password === client.contrasenna;
        //const isValid = await helpers.compairPassword(password, client.password)
        if (isValid) {
            console.log('Válida')
            done(null, client);
        } else {
            console.log('NO Válida')
            done(null, false);
        }
    } else {
        console.log('No existe usuario')
        return done(null, false);
    }
}));

// Objeto de configuración de la autenticación
passport.use('local.signup', new LocalStrategy({
    // Definimos los datos para la autenticación
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { name } = req.body;
    const { lastname } = req.body;
    const { email } = req.body;
    const user = {
        name: name, 
        lastname: lastname,
        email: email,
        username: username,
        password: password,
    };
    //user.password = await helpers.encryptPassword(password);
    const query = 'INSERT INTO cliente (nombre, apellido, correo, nombreUsuario, contrasenna, idNacionalidad) values (?, ?, ?, ?, ?, ?)';
    const result = await db.query(query, [user.name, user.lastname, user.email, user.username, user.password, 1]);
    user.id = result.insertId;
    return done(null, user);
}));

// Serialización de usuario
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    const query = 'SELECT * FROM cliente WHERE idCliente = ?';
    const rows = db.query(query, [id]);
    done(null, rows[0]);
});