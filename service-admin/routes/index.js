const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);
const path = require('path');

// Common Middleware
keystone.pre('routes', [middleware.initLocals, middleware.getIP, middleware.checkIfBlocked, middleware.checkForProxy, middleware.checkForCountry, middleware.addIPAddressToDB]);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	api: importRoutes('./api'),
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});

	// Views
	app.get('/api/search',routes.views.search);
	// app.get('/*',  function (req, res){
	// 	console.log('yeah');
	// 	let filePath = path.join(__dirname, '..','public','index.html');
	// 	console.log(filePath);
	// 	res.sendFile(filePath);
	// });
};
