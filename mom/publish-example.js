import mqtt from 'mqtt';
const client = mqtt.connect();

const topic = 'EVENT';
const message = 'Hello World!';

client.on('connect', function (){
    client.publish(topic,message);
    client.end();
});
