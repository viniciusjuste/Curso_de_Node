const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://root:root@cluster0.dz6qt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


/**
 * Conecta ao MongoDB, insere um novo curso na coleção 'cursos' do banco de dados 'cfbcursos', e fecha a conexão.
 * O novo curso contém informações sobre o nome e o canal.
 * Em caso de erro durante a conexão ou inserção, o erro é registrado no console.
 */

async function run() {
  try {
    console.log("Tentando conectar ao MongoDB...");
    await client.connect();
    console.log("Conectado!");

    const database = client.db("cfbcursos"); // Nome do banco de dados
    const collection = database.collection("cursos"); // Nome da coleção

    const novoCurso = { nome: "Node.js", canal: "CFB Cursos" };

    const resultado = await collection.insertOne(novoCurso);
    console.log("Novo registro criado com ID:", resultado.insertedId);

  } catch (erro) {
    console.error("Erro ao conectar:", erro);
  } finally {
    console.log("Fechando conexão...");
    await client.close();
  }
}

run().catch(console.dir);
