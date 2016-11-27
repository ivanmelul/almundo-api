// inicio de configuracion del server
var express = require('express'),
	config = require('./config');
var app = express();

// middleware para permitir cors (Middleware Pattern)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-session-token, x-geolocation");
  next();
});

// configuracion de ruteo (Recursos de la API rest) (Singleton Pattern)
require('./resource/hotel/index.js')(app);

// server start
app.listen(config.environment.port, function () {
  	console.log('API listening on port '+ config.environment.port + '!');
});

// cacheo todos los errores que no se manejaron
process.on('uncaughtException', function(err){
	console.error('ERROR - Time: ' + Date.now() + ' Value: ', err, err.stack);
});
