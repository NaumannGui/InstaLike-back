import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Conecta ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.

export default async function GetTodosPosts() {
    const db = conexao.db("imersao-instalike");
    // Obtém o banco de dados chamado "imersao-instalike" da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
  };