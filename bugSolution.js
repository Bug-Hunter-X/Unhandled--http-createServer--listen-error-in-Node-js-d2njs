const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
  } else {
    console.error(`Server error:`, error);
  }
  process.exit(1); // Exit with an error code
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
};

server.on('error', onError);
server.on('listening', onListening);

// use the server.listen with the port
server.listen(port); 