var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

function saveUser(req, res){
	var params = req.body;
	var user = new User();

		user.nick = params.nick;
		user.email= params.email;

	bcrypt.hash(params.password, null,null, (err, hash) =>{
		user.password = hash;
		user.save((err, userStored) =>{
			if(err) return res.status(500).send({message:'error al guardar usuario',error: err});
			if(userStored){
				return res.status(200).send({userStored});
			}
			else{
				return res.status(404).send({message:'no se guardo'});
			}
		});
	});
}

function getUsers(req, res) {
	User.find((err, users) =>{
		if(err) return res.status(500).send({message: 'Error en la peticion'});
		if(users) return res.status(200).send({users});
	})
}
function getUser(req, res) {
	var userId = req.params.id;
	User.findById(userId, (err, user) => {
		if(err) return res.status(500).send({message: 'Error en la peticion'});
		if(!user) return res.status(404).send({message: 'El usuario no existe'});
		return res.status(200).send({user});
	});
}
function login(req, res) {
	var params = req.body;
	User.findOne({email: params.email}, (err, userDB) =>{
		if(err) return res.status(500).send({message: 'Error encontrando usuario'});
		if(!userDB) return res.status(401).send({message: 'No existe el usuario'});
		if(!bcrypt.compareSync(params.password, userDB.password)) {
			return res.status(500).send({message: 'Contraseña incorrecta'});
		}
		// userDB.password = null;
		return res.status(200).send({userDB});
	})
}

module.exports = {
	saveUser,
	getUsers,
	getUser,
	login
}