import mongoose from "mongoose";
import { DBURL } from "../setting.js";
const DBLink = process.env.DBURL || DBURL; //how does process.env is getting here without dotenv and
// why here it doesn't matter if we dont write types here
const connectDatabase = () => {
  mongoose
    .connect(DBLink)
    .then(() => {
      console.log(`Database Connected`);
    })
    .catch((err) => {
      //why dont we need type here
      console.log(err);
    }); //after handling error separately in in server file
};
export default connectDatabase;
