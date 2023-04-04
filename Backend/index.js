const express=require("express")
require("dotenv").config();
const { connect } = require("./config/db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());





app.listen(process.env.port, async () => {
    try {
      await connect;
      console.log("connected to data base");
    } catch (err) {
      console.log(`err while starting the  port on ${process.env.port}`);
    }
  
    console.log(`connected to server on  ${process.env.port}`);
  })