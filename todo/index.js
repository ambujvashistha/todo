const express = require("express");
const fs = require("fs");
const app = express();

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

app.delete("/todos", (req, res) => {});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
