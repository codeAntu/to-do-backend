import express from "express";

const add_todo = express.Router();

add_todo.get("/", (req, res) => {
  res.send(`Todo added`);
});

export default add_todo;
