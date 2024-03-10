let dgram = require('dgram');

let server = dgram.createSocket({type: 'udp4', reuseAddr: true});

server.bind(2391, () => {
    //server.setBroadcast(true);
    //server.setMulticastTTL(1);
    //server.setMulticastInterface('192.168.4.195');
    //server.setMulticastLoopback(true);
    //server.addMembership('239.255.255.250');
    setInterval(() => {
        server.send('Test', 2390, "239.255.255.250");
    }, 5000);
});
//
server.on('message', function (message, remote) {
    console.log(' From: ' + remote.address + ':' + remote.port + ' - ' + message);
});
