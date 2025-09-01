import app from "./app.js";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import { PORT } from "./setting.js";
// Load environment variables //error here in dotenv showing undefined
dotenv.config();
connectDatabase();

const port = process.env.PORT;

app.listen(port || PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
