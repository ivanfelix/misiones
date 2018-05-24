var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	nick: {type: String, unique: true, required: [true, 'El nick es necesario']},
	email: {type: String, unique: true, required: [true, 'El email es necesario']},
	password: {type: String, required: [true, 'La contraseña es necesaria']}
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('User', UserSchema);