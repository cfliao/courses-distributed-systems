const soap = require('soap');
const wsdl = 'http://localhost:8192/Adder?wsdl';
const args = { x: 6, y: 6 };

soap.createClient(wsdl, function (err, client) {
    if (err) console.log(err);
    //console.log(client.describe());
    client.add(args, function (err, result, rawResponse, soapHeader, rawRequest) {
        if (err) console.log(err);
        console.log(rawRequest);
        console.log('');
        console.log(rawResponse);
    });
});