const express = require("express");
const app = express();
const port = 4000;

// Endpoint 1: Greet
// Ví dụ: /api/posts/greet?name=Ken
app.get("/api/posts/greet", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Vui lòng truyền query ?name=" });
  }
  res.json({ message: `Xin chào ${name}!` });
});

// Endpoint 2: Sum
// Ví dụ: /api/posts/sum?a=5&b=7
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

// Chạy server
app.listen(port, () => {
  console.log(`✅ Server chạy tại http://localhost:${port}`);
});
