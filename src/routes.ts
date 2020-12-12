import { Router } from "express";

const router = Router();

router.post("/user", (_, res) => {
  throw new Error("error");
});

export { router };
