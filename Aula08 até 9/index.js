(async () => {
    const db = require('./db');

    console.log('Inserir um cliente...');
    const cliente = {nome: 'Joaquim', idade: 20};
    await db.insertCliente(cliente);

    console.log('Obter todos os clientes...');
    const clientes = await db.todosClientes();
    console.log(clientes);
})();
