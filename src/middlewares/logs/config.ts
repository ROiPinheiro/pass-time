import morgan from "morgan";

morgan.token("stack", (_, res: any) => res.errorStack);
morgan.token("body", (req: any) => JSON.stringify(req.body));
