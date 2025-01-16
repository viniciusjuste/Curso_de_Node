const http = require('http');
const porta = process.env.PORT || 3000;

server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('CFB Cursos');
}).listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});