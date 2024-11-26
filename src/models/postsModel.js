import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.

// Function to conect to the database and get all posts from one collection and save in a array
export async function GetTodosPosts() {
    const db = conexao.db("imersao-instalike");
    // Obtém o banco de dados chamado "imersao-instalike" da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
  };

// Function to conect to the database and upload/insert a new post in the collection "posts".
export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instalike");
    // Obtém o banco de dados chamado "imersao-instalike" da conexão estabelecida.

    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.

    return colecao.insertOne(novoPost);
    //Execute an operation to insert a new post in the collection.
};

// Function to conect to the database and upload/insert a new post in the collection "posts".
export async function atualizarPost(id, post) {
  const db = conexao.db("imersao-instalike");
  // Obtém o banco de dados chamado "imersao-instalike" da conexão estabelecida.

  const colecao = db.collection("posts");
  // Obtém a coleção "posts" dentro do banco de dados.

  const objID = ObjectId.createFromHexString(id);

  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:post});
  //Execute an operation to insert a new post in the collection.
};