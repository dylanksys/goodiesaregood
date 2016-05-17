var express = require ('express');

var candy = require('../routers/candy');

var app = express();

app.use('/', candy);

app.listen(9000, function () {
	console.log('goodiesaregood listening on port 9000');
};
