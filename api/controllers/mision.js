var Mision = require('../models/mision');
var moment = require('moment');

function saveMision(req, res) {
	var params = req.body;
	var mision = new Mision();

		mision.title = params.title;
		mision.description = params.description;
		mision.created_at = moment().unix();
		mision.user = params.user;
		
	mision.save((err, misionStored) => {
		if(err) return res.status(500).send({message: 'Error', error: err});
		if(misionStored){
			return res.status(200).send({mision: misionStored});
		}else{
			return res.status(404).send({message:'no se guardo'});
		}
	})
	
}
function getMisions(req, res){
    Mision.find({})
	.populate('user')
	.populate('comments.comment')
    .exec((err, misions) => {
        if(err) return res.status(500).send({err});
        if(misions) return res.status(200).send({misions});
    })
}

function getMision(req, res){
	var idMision = req.params.id;

	Mision.findById(idMision)
		.populate('user')
		.populate('comments.comment')
		.exec((err, mision) => {
		if(err) return res.status(500).send({err});
        if(mision) return res.status(200).send({mision});
	})
}

module.exports = {
    saveMision,
	getMisions,
	getMision
}