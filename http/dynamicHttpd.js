const express = require('express');
const httpServer = express();
//
httpServer.all('/', (req, resp) => {
    const headers = req.headers;
    for (let headerName in headers) {
        console.log(`${headerName}: ${headers[headerName]}`);
    }
    resp.send("Hello");
    //resp.send(req.method);
});
//
//
// httpServer.trace('/', (req, resp) => {
//     console.log('trace');
//     resp.send(req.method);
// });

httpServer.listen(3030);