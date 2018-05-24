var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar Rutas
var mision_routes = require('./routes/mision');
var user_routes = require('./routes/user');
var comment_routes = require('./routes/comment');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use('/api', mision_routes);
app.use('/api', user_routes);
app.use('/api', comment_routes);

// Exportar
module.exports = app;