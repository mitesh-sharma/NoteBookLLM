import express, { Request, Response } from "express";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
