// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/add', (request, reply) => {
    console.log(request.query.x);
    console.log(request.query.y);
    let x = parseInt(request.query.x);
    let y = parseInt(request.query.y);

    reply.send({ result: x + y });
});

// Run the server!
fastify.listen({ port: 3000 });
