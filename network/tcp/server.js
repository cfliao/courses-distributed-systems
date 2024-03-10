let net = require('net');
let server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        //let messages = data.toString().split('.');
        //socket.write(messages.reverse().join('.'));
        console.log(data.toString());
    }).on('error', (err) => {
        console.log(err);
    });
});
server.listen(1337);