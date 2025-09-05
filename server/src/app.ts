import express from "express";
import { routes } from "./routes/productRoute.js";
// import errorMiddleware from "./middlewares/error.js";
const app = express();
app.use("/api/v1/user", routes);
// app.use(errorMiddleware);
export default app;
