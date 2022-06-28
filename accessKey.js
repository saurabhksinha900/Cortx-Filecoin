var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"username":"fs3_demo","password":"fs3_demo","method":"web.Login","jsonrpc":"2.0","id":"1"}';

var options = {
    url: 'https://calibration-fs3.filswan.com/minio/webrpc',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);