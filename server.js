import express from "express";
// Importa o módulo Express para criar o servidor web.

import routes from "./src/routes/postsRoutes.js";
//Importa a função "routes" que é um pacote de todas as rotas para ser utilizado na aplicação

import fs from "fs";
// Importa o módulo FS para interagir com o sistema de arquivos (não utilizado neste exemplo).

const app = express();
// Cria uma instância do Express, que será o nosso servidor web.

routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto.

// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto teste",
//         imagem: "https://placecats.com/miles/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Gato fazendo yoga",
//         imagem: "https://placekitten.com/400/300"
//     },
//     {
//         id: 3,
//         descricao: "Cachorro sorrindo",
//         imagem: "https://placeimg.com/640/480/animals"
//     },
//     {
//         id: 4,
//         descricao: "Paisagem montanhosa",
//         imagem: "https://source.unsplash.com/random/600x400/?mountain"
//     },
//     {
//         id: 5,
//         descricao: "Comida deliciosa",
//         imagem: "https://loremflickr.com/640/480/food"
//     },
//     {
//         id: 6,
//         descricao: "Citação inspiradora",
//         imagem: "https://picsum.photos/id/1018/600/400"
//     },
//     {
//         id: 7,
//         descricao: "Arte abstrata",
//         imagem: "https://picsum.photos/id/237/600/400"
//     }
//   ];

// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// };

// app.get("/api", (req, res) => {
//     res.status(200).send("Resposta status 200:OK");
// });

// app.get("/livro", (req, res) => {
//     fs.readFile('Livro_teste.json', 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send("Erro ao ler o arquivo.");
//         }
//         res.status(200).send(JSON.parse(data)); // Converte a string JSON para um objeto
//     });
// });

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });