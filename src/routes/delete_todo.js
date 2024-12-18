import express from "express";

const delete_todo = express.Router();

delete_todo.delete("/", (req, res) => {
  res.send(`Todo deleted`);
});


export default delete_todo;