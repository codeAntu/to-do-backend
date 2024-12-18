import express from "express";


const todos = express.Router();

todos.post("/", (req, res) => {
  res.send(`Todos`);
}); 




export default todos;