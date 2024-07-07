import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Define a simple API route
    server.get("/api/hello", (req: Request, res: Response) => {
      res.json({ message: "Hello, World!" });
    });

    // Define another API route
    server.get("/api/greet", (req: Request, res: Response) => {
      const name = req.query.name || "World";
      res.json({ message: `Hello, ${name}!` });
    });

    // Handle Next.js routing
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    const port = process.env.PORT ?? 3000;
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
