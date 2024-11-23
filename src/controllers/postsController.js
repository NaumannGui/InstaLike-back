import fs from "fs";
import { GetTodosPosts, criarPost} from "../models/postsModel.js";
// Importando dependencias

// Function to get all posts
export async function listarPosts(req, res) {
    const posts = await GetTodosPosts();
    // Chama a função GetTodosPosts para obter todos os posts.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
};

// Function to post/send a new post/file
export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    // Create a variable to recieve the body from an HTTP request.

    // Try is used to make an attempt. If uncessefull it catches the error message an storage in a variable "erro".
    try {
        const postCriado = await criarPost(novoPost);
        // Create a variable to storage the result of processing "novoPost" from the function "criarPost" from controller function.

        res.status(200).json(postCriado);
        // Send a responde status 200(Ok) and the resulto of "postCriado".

    } catch (erro) {
        console.error(erro.message);
        //Show us just the error message on console.

        res.status(500).json({"Erro":"Falha na requisição"});
        //Send a response status 500 (internal server error) and a message to the client.
    };
};

// Function to post/send a new post/file
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    // Create a variable to recieve the image filename from an POST HTTP request.

    // Try is used to make an attempt. If uncessefull it catches the error message an storage in a variable "erro".
    try {
        const postCriado = await criarPost(novoPost);
        // Create a variable to storage the result of processing "novoPost" using the function "criarPost" from model.js.

        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Variable used to specify the format of the renamed image on windows file system, using the post ID from database.

        fs.renameSync(req.file.path, imagemAtualizada);
        // Function to rename the filename, using the file path from the request, then using "imagemAtualizada" to change the name.

        res.status(200).json(postCriado);
        // Send a responde status 200(Ok) and the result of "postCriado".

    } catch (erro) {
        console.error(erro.message);
        //Show us just the error message on console.

        res.status(500).json({"Erro":"Falha na requisição"});
        //Send a response status 500 (internal server error) and a message to the client.
    };
};