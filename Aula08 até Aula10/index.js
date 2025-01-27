(async () => {
    const db = require('./db');

    // console.log('Inserir um cliente...');
    // const cliente = {nome: 'Joaquim', idade: 20};
    // await db.insertCliente(cliente);

    // console.log('Atualizar um cliente...');
    // await db.updateCliente( 2, { nome: 'Jurandir', idade: 65 });

    console.log('Deletar um cliente...');
    await db.deleteCliente(2);

    console.log('Obter todos os clientes...');
    const clientes = await db.todosClientes();
    console.log(clientes);
})();
