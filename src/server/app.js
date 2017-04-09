var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

var startWebServer = function(ip, port){    
    var express = require('express');
    var app = express();    

    app.use(express.static(rootPath));
    app.get('/', function (req, res) {
        res.sendFile(rootPath + 'src/client/index.html'); 
    })

    app.listen(port, function () {
        console.log('Webserver is running on http://' + ip + ':' + port);
    });
}

var startJsonServer = function(ip, port){
    var jsonServer = require('json-server');
    var server = jsonServer.create();    
    var router = jsonServer.router('./src/server/data/presence/presence.json');
    var middlewares = jsonServer.defaults();    
    server.use(middlewares);
    server.use(router);
    server.listen(port, function () {
        console.log('JSON Server is running on http://' + ip + ':' + port);
    });
}

const dns = require('dns')
dns.lookup('localhost', function(err, ipaddress) 
{
    startWebServer(ipaddress, 7000);
    startJsonServer(ipaddress, 3000);
});