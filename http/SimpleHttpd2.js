const express = require('express');

const httpServer = express();
httpServer.use(express.static(__dirname + '/www'));

httpServer.all('/h', (req, resp) => {
    const headers = req.headers;
    for (let headerName in headers) {
        console.log(`${headerName}: ${headers[headerName]}`);
    }
    resp.end();
});

httpServer.trace('/t', (req, resp) => {
    resp.send('trace...');
    console.log('client send a trace request.')
    resp.end();
});

httpServer.listen(3030);