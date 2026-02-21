import express from "express";
const app = express();
app.listen(8080);
app.use(express.json())
const products = [
  { id: 1, name: "DELL", price: 50000 },
  { id: 2, name: "HP", price: 50000 },
  { id: 3, name: "ASUS", price: 80000 },
];
app.get("/", (req, res) => {
  res.json(products);
});
app.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const result = products.find((product) => product.id === id);
  res.json(result);
});
app.post("/", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(products);
});

app.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  products = products.filter((product) => product.id !== id);
  res.json(products);
});
