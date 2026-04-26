import mqtt from 'mqtt';

const client = mqtt.connect();

client.on('connect', () => {
    console.log('connected');
    client.publish('EVENT', 'hello js');
    client.end();
});