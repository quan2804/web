import express from "express";
const app = express();
const port = 4000;


app.get("/api/posts/greet", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Vui lòng truyền query ?name=" });
  }
  res.json({ message: `Xin chào ${name}!` });
});

app.get("/api/posts/sum", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: "Vui lòng truyền query ?a=&b=" });
  }

  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "a và b phải là số" });
  }

  const sum = numA + numB;
  res.json({ a: numA, b: numB, sum });
});
app.get("/api/users", (req, res) => {
  res.send( "danh sach user" );
});
app.get("/api/products", (req, res) => {
  res.send( "danh sach products" );
});
app.get("/api/posts", (req, res) => {
  res.send( "danh sach Posts" );
});
// Chạy server
app.listen(port, () => {
  console.log(`✅ Server chạy tại http://localhost:${port}`);
});
