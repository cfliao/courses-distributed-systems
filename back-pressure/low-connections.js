const http = require('http');

const server = http.createServer((req, res) => {
  console.log('current conn', server._connections);
  //res.end('OK');
  setTimeout(() => res.end('OK'), 10_000);
});

server.maxConnections = 2;
server.listen(3020, '127.0.0.1');