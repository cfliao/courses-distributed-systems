const mqtt = require('mqtt');

const client = mqtt.connect();
client.subscribe('EVENT');

client.on('message', function (topic, message) {
    console.log(message.toString());
    client.end();
});