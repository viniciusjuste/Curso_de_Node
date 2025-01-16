const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'Teste.txt');
    const content = 'Curso de Node - Cfb Cursos';
    fs.appendFile(filePath, content, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('Arquivo nao encontrado!');
            return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Arquivo criado com sucesso!');
        console.log(__dirname);
        return res.end();
    })
}).listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});