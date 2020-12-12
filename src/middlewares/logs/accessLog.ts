import "./config";
import morgan from "morgan";
import { accessLogStream } from "./streams";

const logString =
  '[:date[clf]] - ":method :url HTTP/:http-version" - :status - ":user-agent" - :body';

const accessLogMiddleware = morgan(logString, {
  stream: accessLogStream,
});

export { accessLogMiddleware };
