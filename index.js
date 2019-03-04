const { KlasaClient } = require('klasa');
const { token } = require('./config');
new KlasaClient({
	providers: {
		default: 'sequelize'
	}
}).login(token);
