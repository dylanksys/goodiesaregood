var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/candyhome', function(req, res) {
	res.send('Path: /candyhome');
};

router.get('/aboutcandy', function(req, res) {
	res.send('Path: /aboutcandy');
};

module.exports = router;
