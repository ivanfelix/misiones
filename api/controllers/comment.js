var Comment = require('../models/comment');
var Mision = require('../models/mision');
var moment = require('moment');

saveComment = async (req, res) => {
	var params = req.body;
	var comment = new Comment();

		comment.comment = params.comment;
		comment.created_at = moment().unix();
		comment.user = params.user;
		comment.mision = params.mision;

		const mision = await Mision.findById(comment.mision);
		await comment.save((err, commentStored) => {
			if(err) return res.status(500).send({message: 'Error', error: err});
			if(commentStored){
				return res.status(200).send({commentStored});
			}else{
				return res.status(404).send({message:'no se guardo'});
			}
		})
		mision.comments.push(comment);
		await mision.save()
		
	
}

function getComments(req, res){
	var params = req.body;
    Comment.find({})
	.populate('user')
    .exec((err, comments) => {
        if(err) return res.status(500).send({err});
        if(comments) return res.status(200).send({comments});
    })
}

module.exports = {
    saveComment,
    getComments
}