import express from "express";
import blogRoute from "./routes/blog.route";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();
import { connectDb } from "./db";
const port = 3001;
app.use(bodyParser.json());

app.get("/", function (req: any, res: any) {
  res.send("Hello World");
});

connectDb().then(() => {
  app.listen(port, () => {
    console.log("server is running on port http://localhost:" + port);
  });
});

app.use(express.json());

app.use("/api", blogRoute);
