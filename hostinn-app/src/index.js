const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./routes');
const passport = require('passport');

// initializations
const app = express();
require('./lib/passport');  

//settings 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
var hbs = exphbs.create({
    helpers: require('./lib/handlebars'),
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),//['views/partials/'],
    layoutsDir: path.join(app.get('views'), 'layouts'),//['views/layouts/'],
    extname: 'handlebars'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// global variables
app.use((req, res, next) => {
    next();
});

// routes
//app.use(require('./routes'));
app.use(require('./routes/autenticacion'));
app.use('/hotels', require('./routes/hotels'));
app.use('/inicio', require('./routes/inicio'));

// public files
app.use(express.static(path.join(__dirname, 'public')));

// starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
