import fs from "fs";
import path from "path";

const accessFolderPath = path.resolve(path.resolve(), "./logs", "access.log");
const errorFolderPath = path.resolve(path.resolve(), "./logs", "error.log");

const accessLogStream = fs.createWriteStream(accessFolderPath, {
  flags: "a",
});

const errorLogStream = fs.createWriteStream(errorFolderPath, {
  flags: "a",
});

export { accessLogStream, errorLogStream };
