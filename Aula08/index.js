(async () => {
    const db = require('./db');
    console.log('Obter todos os clientes...');
    const clientes = await db.todosClientes();
    console.log(clientes);
})();
