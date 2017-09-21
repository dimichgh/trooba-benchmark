'use strict';

var server = require('http').createServer(handle)

server.listen(8080)

function handle (req, res) {
  res.end(JSON.stringify({ hello: 'world' }))
}
