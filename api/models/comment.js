var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = Schema({
	comment: {type: String},
    created_at: {type: String},
    user: {type: Schema.Types.ObjectId, ref:'User'},
    mision: {type: Schema.Types.ObjectId, ref:'Mision'},
});

module.exports = mongoose.model('Comment', CommentSchema);