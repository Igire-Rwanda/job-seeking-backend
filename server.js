import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import routes from "./src/routes";
import cors from "cors"
const app = express();
app.use (cors());
app.use(bodyParser.json());
app.use ('/',routes)

//database configuration

const database = process.env.DATABASE;
mongoose
.connect(database,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => {
       console.log("Database is well connected!");
  });


  // server configuration
  const server = process.env.PORT 
app.listen(4044,() =>{
    console.log ("server is running on port 4044");
})
export default app