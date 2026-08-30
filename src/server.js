const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoService = require('./todoService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// GET all todos
app.get('/todos', (req, res) => {
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new todo
app.post('/todos', (req, res) => {
  try {
    const { title } = req.body;
    const todo = todoService.createTodo(title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;