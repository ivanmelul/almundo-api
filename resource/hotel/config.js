var config;
if (process.env.CONFIG === 'production') {
	config = {
		name: 'hotel',
		host: '10.0.0.126',
		port: 8005
	}
} else {
	config = {
		name: 'hotel',
		host: 'localhost',
		port: 8005
	}
}

module.exports = config;