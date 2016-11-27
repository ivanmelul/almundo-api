var config = require('./config'),
	Q = require('q'),
	request = require('../../utils/request')();

module.exports = {
	getAll: function(url) {
		var deferrer = Q.defer();
		var json = 
		{	
			"hotels" : [

				{
					"name" : "Hotel Emperador",
					"stars" : "3",
					"price" : "1596",
				},
				{
					"name" : "Petit Palace San Bernardo",
					"stars" : "4",
					"price" : "2145",
				},
				{
					"name" : "Hotel Nuevo Boston",
					"stars" : "2",
					"price" : "861",
				}
			]
		};

		deferrer.resolve(json);
		//deferrer.reject('Err');


		return deferrer.promise;

	}
};