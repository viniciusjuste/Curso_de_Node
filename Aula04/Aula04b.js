const express = require('express');
const porta = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem vindo ao CFB Cursos');
})

app.get('/canal', (req, res) => {
    res.json({ canal: 'CFB Cursos' });
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})