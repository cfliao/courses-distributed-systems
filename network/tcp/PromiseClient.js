let net = require('net');
let {PromiseSocket} = require('promise-socket');

//let client = new PromiseSocket(new Socket());
const client = new PromiseSocket();

 (async () => {
    await client.connect(5678, '127.0.0.1');
    console.log('connected');

    await client.write('x.y.z.w');
    console.log('written: x.y.z.w');

    let data = await client.once('data');
    console.log(data.toString());

    await client.end();
})();

// client.connect(5678, '127.0.0.1', function () {
//         console.log('connected');
//         client.write('x.y.z.w', () => {
//             console.log('written: x.y.z.w');
//             client.on('data', (data) => console.log('received: ' + data.toString()));
//         });
//
//         client.end();
//     }
// );
