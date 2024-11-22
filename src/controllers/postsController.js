import GetTodosPosts from "../models/postsModel.js";


export async function listarPosts(req, res) {
    const posts = await GetTodosPosts();
    // Chama a função GetTodosPosts para obter todos os posts.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
};