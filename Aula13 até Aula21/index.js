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

    // const novoCurso = { nome: "Angular", canal: "CFB Cursos" };

    // const resultado = await collection.insertOne(novoCurso);
    // console.log("Novo registro criado com ID:", resultado.insertedId);



    // const obj = [
    //   {nome: "Angular", canal: "CFB Cursos"},
    //   {nome: "React", canal: "CFB Cursos"},
    //   {nome: "Vue", canal: "CFB Cursos"}
    // ]

    // const addCursos = await collection.insertMany(obj);
    // console.log(addCursos.insertedCount + " registros inseridos.");




    // const cursoFind = await collection.findOne({});
    // if (!cursoFind) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log(`Registro encontrado: ${JSON.stringify(cursoFind)}`);




    // const cursos = await collection.find({}, { projection: { canal: 0 } }).toArray();
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Todos os registros: " , cursos[0]);




    // const query = {nome: /N./};
    // const cursos = await collection.find(query, { projection: { canal: 0 } }).toArray();
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Todos os registros: " , cursos);




    // const ordenacao = {curso : -1};
    // const query = {};
    // const cursos = await collection.find(query).sort(ordenacao).toArray();
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Todos os registros: ", cursos);




    // let query = {nome : "Node.js"};
    // const cursos = await collection.deleteOne(query);
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Curso deletado");

    // let query = {nome : /J./};
    // const cursos = await collection.deleteMany(query);
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Curso deletado");




    // query = {};
    // const allCursos = await collection.find(query, { projection: { canal: 0 } }).toArray();
    // if (cursos.length === 0) {
    //   console.log("Nenhum registro encontrado.");
    //   return;
    // }
    // console.log("Todos os registros: " , allCursos);




    // const obj = {nome: "Java"}

    // const deleteCursos = await collection.deleteMany(obj);
    // console.log(deleteCursos.deletedCount + " registros deletados.");




    // const query = {nome: "Java"};
    // const newQuery = { $set: { nome: "Java 2025" } }
    // const updateCurso = await collection.updateOne(query, newQuery)
    // console.log(updateCurso.modifiedCount + " registros atualizados.");




    // const query = {nome: "Java 2025"};
    // const newQuery = { $set: { nome: "Java 2020" } }
    // const updateCurso = await collection.updateMany(query, newQuery)
    // console.log(updateCurso.modifiedCount + " registros atualizados.");


    const query = {};
    const limite = 2;

    const allCursos = await collection.find(query).limit(limite).toArray();
    if (allCursos.length === 0) {
      console.log("Nenhum registro encontrado.");
      return;
    }
    console.log("Todos os registros: " , allCursos);

  }


  catch (erro) {
    console.error("Erro ao conectar:", erro);
  } finally {
    console.log("Fechando conexão...");
    await client.close();
  }
}

run().catch(console.dir);
