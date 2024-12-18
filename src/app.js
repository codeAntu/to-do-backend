import express from "express";
import { connect } from "./config/connectdb.js";
import todos from "./routes/todos.js";
import add_todo from "./routes/add_todo.js";
import delete_todo from "./routes/delete_todo.js";
import update_todo from "./routes/update_todo.js";

const app = express();

app.use(express.json());

app.use("/", todos);
app.use("/add_todo", add_todo);
app.use("/delete_todo", delete_todo);
app.use("/update_todo", update_todo);

connect().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
