class Process {
    constructor(name) {
        this.name = name;
        this.clock = 0;
    }

    // 本地事件，時間 +1
    localEvent() {
        this.clock++;
        //logEvent(this.name, "Local Event", null, this.clock);
    }

    // 傳送訊息給另一個進程
    sendMessage(receiver) {
        this.clock++;
        logEvent(this.name, "Send Message", receiver.name, this.clock);
        receiver.receiveMessage(this, this.clock);
    }

    // 接收訊息並更新時鐘
    receiveMessage(sender, senderClock) {
        this.clock = Math.max(this.clock, senderClock) + 1;
        logEvent(this.name, "Receive Message", sender.name, this.clock);
    }
}

// 創建三個進程 A, B, C
let processes = [new Process("A"), new Process("B"), new Process("C")];

// 事件紀錄陣列
let eventLog = [];

function logEvent(process, eventType, object, clock) {
    let entry = {
        process,
        eventType,
        object: object ? object : "-",
        clock
    };
    eventLog.push(entry);
}

// 隨機選擇一個進程（排除指定進程）
function getRandomProcess(excludeProcess = null) {
    let available = processes.filter(p => p !== excludeProcess);
    return available[Math.floor(Math.random() * available.length)];
}

// 隨機觸發事件
function randomEvent() {
    let process = processes[Math.floor(Math.random() * processes.length)];
    let eventType = Math.random(); // 0-1 隨機數

    if (eventType < 0.5) {
        // 50% 機率產生本地事件
        process.localEvent();
    } else {
        // 50% 機率傳送訊息
        let receiver = getRandomProcess(process);
        process.sendMessage(receiver);
    }
}

// 設定隨機執行 100 次
let counter = 0;
let interval = setInterval(() => {
    if (counter >= 100) {
        clearInterval(interval);
        console.log("\nSimulation Completed.");
        console.log(`Final Clocks: A=${processes[0].clock}, B=${processes[1].clock}, C=${processes[2].clock}\n`);

        console.log("Event Log:");
        console.table(eventLog); // 以表格格式輸出事件紀錄
    } else {
        randomEvent();
        counter++;
    }
}, 10);
