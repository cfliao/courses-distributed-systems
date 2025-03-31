var PROTO_PATH = __dirname + '/helloworld.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
    var client = new hello_proto.Greeter('localhost:50051',
        grpc.credentials.createInsecure());

    console.log('Sending...');
    client.sayHello({name: 'Tom2'}, function (err, response) {
        console.log('Response:', response.message);
    });

}

main();
