const http =require('http');
const route=require('./route');
const { buffer } = require('stream/consumers');

const server=http.createServer(route)

server.listen(4000)



