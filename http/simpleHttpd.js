const express = require('express');
const httpServer = express();
httpServer.use(express.static(__dirname + '/www'));

httpServer.listen(3030);