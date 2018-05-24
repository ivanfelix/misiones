var app = require('./app');
var port = 3800;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// conexion a la base de datos
mongoose.connect('mongodb://ivanfelix:Marciano88@ds133856.mlab.com:33856/videplayer',{ useMongoLient: true })
	.then(()=>{
	console.log('La conexion se realizo');
	// crear servidor
		app.listen(port, () =>{
			console.log('El servidor esta corriendo');
		});
	})
	.catch(err => console.log(err));
