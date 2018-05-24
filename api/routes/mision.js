var express = require('express');
var MisionController = require('../controllers/mision');

var api = express.Router();

api.post('/mision', MisionController.saveMision); 
api.get('/misiones', MisionController.getMisions); /*
api.delete('/mision/:id', MisionController.deleteMision);
api.put('/mision/:id', MisionController.updateMision);
api.put('/agregar-pin', MisionController.addPin);*/
api.get('/mision/:id', MisionController.getMision);

module.exports = api;