import mongoose from "mongoose";
require("dotenv").config();

const uri =
  "mongodb+srv://" +
  process.env.USERNAME +
  ":" +
  process.env.PASSWORD +
  "@cluster0.duwgf.mongodb.net/fund_transfer_cluster?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database is connected successfully...");
  } catch (err: any) {
    console.log("connection error occurred. ensure you are connected to db...");
  }
};

export default connect;
