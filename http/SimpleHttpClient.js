const http = require('http');

const options = {
    host: 'cfliao.net',
    port: 80,
    path: '/cht/doku.php',
    method: 'GET'
};


http.get(options, (resp)=>{
    resp.setEncoding('utf-8');
    console.log(resp.headers);
    resp.on('data', function (data) {
        console.log(data);
    });
});



