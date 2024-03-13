var express = require('express');
var bodyParser = require('body-parser');
var httpServer = express();
var stapler = {
	count : 10
};

//httpServer.use(bodyParser.json());
httpServer.use(bodyParser.urlencoded({
	extended : false
}));

httpServer.get('/stapler', function(req, res) {
	res.send('stapler count:' + stapler.count);
});

httpServer.put('/stapler', function(req, res) {
	stapler.count = req.body.count;
	res.send('stapler count:' + stapler.count);
});

httpServer.post('/stapler', function(req, res) {
	stapler.count++;
	res.send('stapler count:' + stapler.count);
});

httpServer.listen(3000);