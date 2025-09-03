const express = require("express");
const fs = require("fs");
const app = express();
const mysql = require("mysql2/promise");
const { createConnection } = require("net");

let connection;

async function setup() {
  config = {
    host: "",
    user: "",
    database: "todo",
  };
  connection = await mysql.createConnection(config);
  await connection.connect();
}

app.use(express.json());

app.get("/todos", async (req, res) => {
  const tasks = await fs.readFile(__dirname + "/db.json", "utf-8");
  const todos = JSON.parse(tasks);
  res.status(200).json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    title: req.body.title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i] = {
        id: id,
        title: title,
        completed: completed,
      };
    }
  }
});
app.delete("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
