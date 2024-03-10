const dgram = require('dgram');
const message = Buffer.from('Hello World!');
const client = dgram.createSocket('udp4');
client.send(message, 1337, 'localhost', (err) => {
    client.close();
});