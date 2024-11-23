import express from "express";
// Imports the Express web framework for creating the server and handling routes.

import multer from "multer";
// Imports the Multer middleware for handling file uploads in Node.js applications.

import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";
// Import functions from postsController.js

// Variable to use the same path and file name from Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
        // Set the destination directory for uploaded files (Windows)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        // Use the original filename for the uploaded file
    }
});

// Defining a variable named "upload", using multer to deal with files. Here we add the destination folder "./uploads".
const upload = multer({ dest: "./uploads" , storage});

//Linux e mac, use bellow. No need "storage".
//const upload = multer({ dest: "./uploads"});

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware para analisar corpos de requisições em formato JSON.
    
    app.get("/posts", listarPosts);
    // Rota para buscar todos os posts.

    app.post("/posts", postarNovoPost)
    // Rota para "subir"/enviar um novo post/arquivo para o server

    app.post("/upload", upload.single("imagem"), uploadImagem);
    // Route to uploud/send PNG images to the server and database.
};

export default routes;