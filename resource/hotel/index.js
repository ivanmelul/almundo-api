var express = require('express'),
	config = require('./config'),
	globalConfig = require('../../config'),
	bodyParser = require('body-parser'),
	hotelMethods = require('./methods'),
	tickets = require('../../utils/tickets'),
	Q = require('q'),
	request = require('../../utils/request')();

module.exports = function(app){
	var router = express.Router();

	router.use('/', bodyParser.json({limit:'1mb'}));

	router.get('/', function (req, res, next) {
		hotelMethods.getAll(req.url).then(function getHotelResponse(jHotels){
			res.send(jHotels);
		});
	});




	app.use('/' + config.name, router);
};