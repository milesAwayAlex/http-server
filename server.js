import { createServer } from 'http';
const PORT = process.argv[2] || 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Laika\n');
});
server.listen(PORT);
