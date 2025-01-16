const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;
const path = require('path');

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'Aula05.html'), (err, arquivo) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Arquivo não encontrado!');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(arquivo);

        return res.end();
    });

}).listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});