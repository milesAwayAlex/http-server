import fetch from 'node-fetch';

const HOST = process.argv[2] || 'localhost';
const PORT = process.argv[3] || 3000;

fetch(`http://${HOST}:${PORT}/`)
  .then((res) => console.log(res.status, res.statusText, res.ok, res.headers, res.body))
  .catch((err) => {
    throw err;
  });
