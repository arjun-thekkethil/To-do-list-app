const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const todo = { id: Date.now(), text: req.body.text };
    todos.push(todo);
    res.status(201).json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
