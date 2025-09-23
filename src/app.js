const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());


const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const postRoutes = require("./routes/post");

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Node.js Router Tutorial!",
    endpoints: {
      users: "/users",
      products: "/products",
      posts: "/api/posts"
    }
  });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
