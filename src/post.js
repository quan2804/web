import { Router } from "express";

const postRouter = Router();

postRouter.get("/", (req, res) => {
  res.send("Post");
});

postRouter.get("/greet", (req, res) => {
  res.send("Post greet");
});

export default postRouter;