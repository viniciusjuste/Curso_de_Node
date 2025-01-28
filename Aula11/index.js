const http = require('http');
const porta = process.env.PORT || 3000;
const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('msg', () => {
    console.log('Evento disparado');
});


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    emitter.emit('msg');
    res.write('CFB Cursos');
    res.end();
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})