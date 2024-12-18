import express from "express";

const update_todo = express.Router();

update_todo.post("/", (req, res) => {
  res.send(`Todo updated`);
});

export default update_todo;
