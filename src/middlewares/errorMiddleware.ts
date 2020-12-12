const errorMiddleware = (err: any, req: any, res: any, next: any) => {
  if (err) {
    res.errorStack = `\n${err.stack}`;
    return res.status(500).send();
  }

  next();
};

export { errorMiddleware };
