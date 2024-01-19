
import express  from "express";
const app = express();


app.use(express.json());


let todos = [
  { id: Date.now(), title: 'Learn Express' },
  { id: Date.now() + 1, title: 'Build a Todo App' },
];


app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
