const soap = require('soap');
const http = require('http');
const xml = require('fs').readFileSync('Adder.wsdl', 'utf8');
const service = {
    CalculatorImplService: {
        CalculatorImplPort: {
            add: function (inputMessage) {
                return {return: inputMessage.x + inputMessage.y};
            }
        }
    }
}

const server = http.createServer(function (request, response) {
    response.end('404: Not Found: ' + request.url);
});

soap.listen(server, '/Adder', service, xml, function () {
    console.log('server initialized');
});

server.listen(8192);
