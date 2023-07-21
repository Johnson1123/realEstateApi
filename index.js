import express from "express";
const port = 5000;
const app = express();
import connectDB from "./config/db.js";
import * as dotenv from "dotenv";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Sever ready");
});
app.use("/api", agentRoutes);

connectDB();

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server running ${port}`));
