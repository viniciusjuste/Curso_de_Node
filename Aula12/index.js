const http = require('http');
const porta = process.env.PORT || 3000;
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/upload' && req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Ocorreu um erro ao processar o arquivo.');
                return res.end();
            }
            const filePath = files.filetoupload.filepath;
            const fileName = files.filetoupload.originalFilename;
            const fileData = fs.readFileSync(filePath);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Arquivo recebido com sucesso! Nome do arquivo: ${fileName}`);
            return res.end();
        })
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/upload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Enviar">');
    res.write('</form>');
    return res.end();
});
 server.listen(porta, () => {
     console.log(`Servidor rodando em http://localhost:${porta}`);
 })