var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.post('/user', UserController.saveUser);
api.get('/user/:id', UserController.getUser);
api.get('/users', UserController.getUsers);
api.post('/login', UserController.login);

module.exports = api;