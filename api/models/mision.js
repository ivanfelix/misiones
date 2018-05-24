var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MisionSchema = Schema({
	title: {type: String, required: [true, 'El titulo es necesario']},
	description: {type: String, required: [true, 'Agrega una descripción']},
	created_at: {type: String},
	user: {type: Schema.Types.ObjectId, ref:'User'},
	comments:[
		{
			comment: {type: Schema.Types.ObjectId, ref:'Comment'},
		}
	]
},
{collection:'misiones'});


module.exports = mongoose.model('Mision', MisionSchema);