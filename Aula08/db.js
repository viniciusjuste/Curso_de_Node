/**
 * Conecta ao banco de dados. Se a conexão  estiver estabelecida, retorna a conexão existente.
 * Caso contrário, cria uma nova conexão.
 * @returns {Promise<import('mysql2').Connection>} A conexão com o banco de dados.
 */
const conectar = async () => {
    if (global.conection && global.conection.state !== 'disconnected') {
        return global.conection;
    }

    try {
        const mysql = require('mysql2/promise');
        const conection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345678',
            database: 'cfbcursos'
        });

        console.log('Conectado ao banco de dados');
        global.conection = conection;

        return conection;
        
    } catch (error) {
        console.log(error);
    }
}

/**
 * Retorna todos os clientes da tabela cliente_node.
 * @returns {Promise<Array<import('./tipos').Cliente>>} Uma Promise que resolve com um array de clientes.
 */
const todosClientes = async () => {
    const conection = await conectar();
    const [linhas]  = await conection.query('SELECT * FROM cliente_node');
    return await linhas;
}

module.exports = {todosClientes};