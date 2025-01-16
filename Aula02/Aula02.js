const http = require('http');

 http.createServer((req, res) => {
    res.setHeader(200, 'Content-Type', 'text/plain');
    res.write('CFB Cursos');
    res.end();
}); server.listen(1337);