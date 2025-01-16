const http = require('http');
const url = require('url');
const porta = 3000;
const host = 'localhost';

// Servidor
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
   res.write(req.url)
   const p = url.parse(req.url, true).query;
   res.write(p.nome);
    res.end();
})

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})