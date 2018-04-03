var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('./dist'))
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

exports.http = http;
exports.startServer = function(port) {
    http.listen(port, function () {
        console.log('http server listening on *:'+port);
    });
}