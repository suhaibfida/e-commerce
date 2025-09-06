import app from "./app.js";
import * as dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import { PORT } from "./setting.js";
dotenv.config();
connectDatabase();
process.on("uncaughtException", (error) => {
  console.log("error" + error.message);
  console.log("closing the server");
  server.close();
  process.exit(1);
});

const port = process.env.PORT;

app.listen(port || PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
process.on("unhandledRejection", (error: any) => {
  console.log("error" + error.message);
  console.log("closing server");
  server.close(() => {
    process.exit(1);
  });
});
