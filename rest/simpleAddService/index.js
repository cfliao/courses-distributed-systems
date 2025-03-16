// Require the framework and instantiate it
const fastify = require('fastify')();
const formbody = require('@fastify/formbody');

// Register the formbody plugin
fastify.register(formbody);
// Declare a route
fastify.post('/calculator/add', (request, reply) => {
    console.log(request.body.x);
    console.log(request.body.y);
    let x = parseInt(request.body.x);
    let y = parseInt(request.body.y);

    reply.send({ result: x + y });
});

// Run the server!
fastify.listen({ port: 3000 });
