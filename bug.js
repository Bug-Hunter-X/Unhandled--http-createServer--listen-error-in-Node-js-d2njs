const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
}).listen(3000);

//Error handling for the server, this code will never run because there is no way to catch error in listen method
server.on('error', (err) => {
  console.error('Server error:', err);
});