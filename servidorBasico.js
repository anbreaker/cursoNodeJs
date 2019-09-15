let http = require('http');

let server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'});
    response.end('<h1>Wake up, Neo...go js</h1>\n');
});

//Arrancamos servidor

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en --> localhost:1337');