const http = require('http');
const request = require('request'); //VIKTIGT ATT Requset Packaget är installerat i root för webserver.js, alternativt globalt istallerat
const port = 8082;
let queue = [];

const server = http.createServer(requestHandler);
server.listen(port);

function requestHandler (req, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(req.method === 'POST'){
      req.setEncoding('utf-8');
      req.on('data', theTable => queue.push(theTable));
      response.end();

    }else if(req.method === 'GET'){
      if(req.url === '/shift'){
          queue.shift();
          response.end();
      }else{
          response.setHeader('Content-Type', 'Application/JSON;');
          response.end(JSON.stringify(queue));
    }
  }
}
