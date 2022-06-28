var request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGc5cCI6IkpXVCJ9.eyJhY2Nlc3NLIiwiZXhwIjoxMJEuksJBALDYXbw9K'
};

var dataString = '{"method":"web.DeleteBucket","jsonrpc":"2.0","id":"1","bucketName":"saurabhksinha"}';

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