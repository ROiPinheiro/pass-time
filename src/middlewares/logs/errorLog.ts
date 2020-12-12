import "./config";
import morgan from "morgan";
import { errorLogStream } from "./streams";

const logString = `
[:date[clf]] - ":method :url HTTP/:http-version" - :status - ":user-agent" - :body :stack
`;

const errorLogMiddleware = morgan(logString, {
  stream: errorLogStream,
  skip: (_, res) => res.statusCode <= 400,
});

export { errorLogMiddleware };
