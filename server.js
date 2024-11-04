const express = require('express');
const app = express();
app.use(express.json())


app.get('/',(req,res) => {
    res.send("Hellow World");
})

let todos = []
// Create a new todo
app.post('/todos',(req,res) => {
    const {title,description} = req.body
    const newTodo = {
        id: todos.length + 1,
        title,
        description
    }
    todos.push(newTodo)
    console.log("newTodo",newTodo,"todos",todos)
    res.status(201).json(newTodo)
})

app.get('/todos',(req,res) => {
    res.send(todos)
})
const port = 3000;
app.listen(port, () =>{
    console.log("The server is listening", port)
})