var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });
var uuid = require('node-uuid'),
    _ = require('lodash')._;

wss.on('connection', function (ws) {
    var client_uuid = uuid.v4();
    console.log('client [%s] connected', client_uuid);
    console.log(ws.onmessage);
    let count = 0;
    messageUpdater = setInterval(function () {
        if (ws.readyState == 1) {
            ws.send(JSON.stringify({value:count++}));
        }
    }, 500);

    var clientStocks = [];

    ws.on('message', function (message) {
        console.log('Client: ' + message);
    });

    ws.on('close', function () {
        if (typeof messageUpdater !== 'undefined') {
            clearInterval(messageUpdater);
        }
    });
});

console.log("...");