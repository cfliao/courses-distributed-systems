let obj = {
    key0: 'value0',
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4'
};

let buf = Buffer.from(JSON.stringify(obj));
console.log(buf);

let obj1 = JSON.parse(buf.toString());
console.log(obj1);