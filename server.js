const express = require("express");
const res = require("express/lib/response");
const postController = require("./src/controllers/post-controller")
const userController = require("./src/controllers/users-controller")
const todosController = require("./src/controllers/todos-controller")

//app objemizi express kullanarak oluşturduk. İçindeki metodları kullanacağız.
const app = express();
// Bütün postları döndürüyoruz
app.get("/posts",(req,res)=>{
    let posts = postController.getAllPosts();
    res.send(posts);
});
// PostId değerini alarak Controller=>PostController içindeki getPostById metodumuza gönderiyoruz
// ve filtre kullanarak eşleşen Id'yi sonuç olarak döndürüyoruz.
app.get("/posts/:postId",(req,res)=>{
    let posts = postController.getPostById(req.params.postId);
    res.send(posts);
})
// Bütün kullanıcıları döndürüyoruz
app.get("/users",(req,res)=>{
    let users = userController.getAllUsers();
    res.send(users);
})

// UserID parametresi varsa UserId'ye göre sonuç döndürüyoruz
app.get("/users/:userId",(req,res)=>{
    let users = userController.getUserById(req.params.userId);
    res.send(users);
})

// query varsa Id'ye göre sonuç döndürüyoruz yoksa bütün todoları döndürüyoruz
app.get("/todos",(req,res)=>{
    var todos;  

    if(req.query.userId){
        todos = todosController.getTodosById();
    }
    else{
        todos = todosController.getTodosById(req.query.userId);
    }
    
    res.send(todos);            
})

// Serveri dinliyoruz.
app.listen(5000);