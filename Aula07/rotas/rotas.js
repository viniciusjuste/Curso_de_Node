const express = require('express');
const rotas = express.Router();

let cursosInfo = [
    { 'curso': 'Node', 'info': 'Curso de Node' },
    { 'curso': 'React', 'info': 'Curso de React' },
    { 'curso': 'Java', 'info': 'Curso de Java' },
    { 'curso': 'Arduino', 'info': 'Curso de Arduino' }
]

rotas.get('/', (req, res) => {
    res.json('Seja bem vindo ao CFB Cursos');
})

rotas.get('/:cursoId', (req, res) => {
    const curso = req.params.cursoId;
    const infoCurso = cursosInfo.find(c => c.curso === curso);
    if (!infoCurso) {
        res.status(404).json({ error: 'Curso nao encontrado' });
    } else {
        res.status(200).json(infoCurso);
    }
})

module.exports = rotas;