module.exports = function(app) {

	app.get('/', function(req, res){
		res.render('index', { 
			title: 'Welcome!', 
			projectUrl:"",
			message: req.flash('signinMessage') 
		});
	});
	app.get('/test/', function(req, res){
		res.render('test', { 
			title: 'Welcome!', 
			projectUrl:"",
			message: req.flash('signinMessage') 
		});
	});
	app.get('/success', function(req, res){
		res.render('success', { title: 'Congrats!' });
	});

};

