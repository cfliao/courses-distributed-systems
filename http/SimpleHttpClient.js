const https = require('https');

const options = {
    host: 'cfliao.nccu.edu.tw',
    port: 443,
    path: '/',
    method: 'GET'
};


https.get(options, (resp)=>{
    resp.setEncoding('utf-8');
    console.log(resp.headers);
    resp.on('data', function (data) {
        console.log(data);
    });
});



