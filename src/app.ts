import "dotenv/config";
import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { accessLogMiddleware, errorLogMiddleware } from "./middlewares/logs";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(accessLogMiddleware);
app.use(errorLogMiddleware);

app.use(router);

app.use(errorMiddleware);

export { app };
