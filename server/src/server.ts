import app from "./app.js";
import * as dotenv from "dotenv";
import connectDatabase from "./config/db.js";

process.on("uncaughtException", (error) => {
  console.log("error" + error.message);
  console.log("closing the server");
  server.close();
  process.exit(1);
});
dotenv.config();
connectDatabase();
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
process.on("unhandledRejection", (error: any) => {
  console.log("error" + error.message);
  console.log("closing server");
  server.close(() => {
    process.exit(1);
  });
});
