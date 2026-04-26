import mqtt from 'mqtt';
const client = mqtt.connect();

client.subscribe('EVENT');

client.on('message', function (topic, message) {
    console.log('Topic: ' + topic);
    console.log('Message: ' + message);
    client.end();
});