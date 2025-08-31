import express from "express";
import { routes } from "./routes/productRoute.js";
const app = express();
app.use("/api/v1/user", routes);
export default app;
