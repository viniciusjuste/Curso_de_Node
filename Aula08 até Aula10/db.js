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
    const [linhas] = await conection.query('SELECT * FROM cliente_node');
    return await linhas;
}

/**
 * Insere um cliente na tabela cliente_node.
 * @param {import('./tipos').Cliente} cliente O cliente a ser inserido.
 * @returns {Promise<import('mysql2').Result>} A Promise que resolve com o resultado da inserção.
 */
const insertCliente = async (cliente) => {
    const conection = await conectar();
    const sql = 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)';
    const valores = [cliente.nome, cliente.idade];
    const [result] = await conection.query(sql, valores);
    return result;
}


/**
 * Atualiza um cliente na tabela cliente_node.
 * @param {number} id O ID do cliente a ser atualizado.
 * @param {import('./tipos').Cliente} cliente O cliente atualizado.
 * @returns {Promise<import('mysql2').Result>} A Promise que resolve com o resultado da atualização.
 */
const updateCliente = async (id, cliente) => {
    const Connection = await conectar();
    const sql = 'UPDATE cliente_node SET nome = ?, idade = ? WHERE id = ?';
    const valores = [cliente.nome, cliente.idade, id];
    const [result] = await Connection.query(sql, valores);
    return result;
}

/**
 * Deleta um cliente da tabela cliente_node.
 * @param {number} id O ID do cliente a ser deletado.
 * @returns {Promise<import('mysql2').Result>} A Promise que resolve com o resultado da deleção.
 */
const deleteCliente = async (id) => {
    const Connection = await conectar();
    const sql = 'DELETE FROM cliente_node WHERE id = ?';
    const valor = [id];
    const [result] = await Connection.query(sql, valor);
    return result;
}

module.exports = { todosClientes, insertCliente, updateCliente, deleteCliente };