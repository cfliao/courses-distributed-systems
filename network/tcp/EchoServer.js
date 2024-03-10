//let {PromiseSocket} = require("promise-socket");
let net = require("net");

// let server = net.createServer(async socket => {
//     let ps = new PromiseSocket(socket);
//     let data = await ps.once('data');
//     console.log(data.toString());
//     await ps.write(`reply:${data}`);
// });

let server = net.createServer(function (socket) {
        console.log('client connected');
        socket.on('data', function (data) {
            console.log(data.toString());// 印出所收到的字串
            socket.write(`reply: ${data}`);//將收到的字串回傳給client
        }).on('error', (err) => {
            console.log(err);
        });
    })
;

server.listen(1337);
