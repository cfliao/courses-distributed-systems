let net = require('net');
let client = new net.Socket();
//let {PromiseSocket} = require('promise-socket');
//let client = new PromiseSocket(new net.Socket());
//
// (async () => {
//     await client.connect(1337, '127.0.0.1');
//     await client.write('test');
//     console.log('written');
//     await client.write('test2');
//     console.log('written');
//     let data = await client.once('data');
//     console.log(data.toString());
//     await client.end();
// })();
//
client.connect(1337, '127.0.0.1', function () {
        console.log('connected');
        client.on('data', (data) => console.log(data.toString()));
        client.write('test', () => {
            console.log('written');
            client.end();
        });

    }
);

