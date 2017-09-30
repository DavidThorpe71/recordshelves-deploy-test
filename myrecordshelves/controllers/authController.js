const passport = require('passport');

exports.login = passport.authenticate('local', {
	failureRedirect: '/login',
	failureFlash: 'Failed login!',
	successRedirect: '/',
	successFlash: 'You are now logged in!'
})

exports.logout = (req, res) => {
	req.logout();
	req.flash('success', 'You have logged out!');
	res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
	// first check if user is authenticated
	if(req.isAuthenticated()) {
		next(); // carry on they are logged in
		return;
	}
	req.flash('error', 'You need to be logged in to do that!');
	res.redirect('/login');
}