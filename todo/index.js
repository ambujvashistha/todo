const express = require("express");

const todos = [
  {
    title: "Attempt post class",
    completed: false,
  },
  {
    title: "Attempt post class",
    completed: false,
  },
];

const app = express();

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
