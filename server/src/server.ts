import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./env" });

const port = process.env.PORT || 3000; // Add fallback port
console.log("Port:", port);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
