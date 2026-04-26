import mqtt from 'mqtt-packet';
const opts = {protocolVersion: 4}; // default is 4. Usually, opts is a connect packet
const parser = mqtt.parser(opts);
import hexToArrayBuffer from 'hex-to-array-buffer';

const rawData1 = '100c00044d5154540402003c000020020000';
const rawData2 = '820a000100054556454e54009003000100';
const message = Buffer.from(hexToArrayBuffer(rawData2));

parser.on('packet', function (packet) {
    console.log(packet);
});

parser.parse(message);
