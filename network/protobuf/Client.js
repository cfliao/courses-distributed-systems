const dgram = require('dgram');
const protobuf = require('protobufjs');

// 配置目標伺服器資訊
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 1337;

async function runClient() {
    try {
        const root = await protobuf.load("msg.proto");
        const MyMessage = root.lookupType("MyMessage");

        const payload = {
            id: 123,
            name: "Hello",
        };

        const errMsg = MyMessage.verify(payload);
        if (errMsg) throw Error(errMsg);

        const message = MyMessage.create(payload);
        const buffer = MyMessage.encode(message).finish();
        const client = dgram.createSocket('udp4');

        client.send(buffer, SERVER_PORT, SERVER_HOST, (err) => {
            if (err) {
                console.error("發送失敗：", err);
            } else {
                console.log(`成功送出編碼後的封包 (${buffer.length} bytes) 至 ${SERVER_HOST}:${SERVER_PORT}`);
            }
            client.close();
        });

    } catch (error) {
        console.error("執行過程中發生錯誤：", error);
    }
}

runClient();