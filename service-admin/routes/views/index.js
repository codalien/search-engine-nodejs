// const keystone = require('keystone');
//
// exports = module.exports = function (req, res) {
// 	console.log('Client ip is ', req.clientIp);
// 	const view = new keystone.View(req, res);
// 	const locals = res.locals;
//
// 	// locals.section is used to set the currently selected
// 	// item in the header navigation.
// 	locals.section = 'home';
//
// 	// Render the view
// 	view.render('index');
// };


module.exports = async (req, res) => {
	if(req.query.search){
		res.redirect('/');
	}

	res.send('<H1>home page</H1>');
};
