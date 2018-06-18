var express = require('express');
var CommentController = require('../controllers/comment');

var api = express.Router();

api.post('/comment', CommentController.saveComment); /*
api.get('/comments', CommentController.getComments); 
api.delete('/mision/:id', MisionController.deleteMision);
api.put('/mision/:id', MisionController.updateMision);
api.put('/agregar-pin', MisionController.addPin);*/

module.exports = api;