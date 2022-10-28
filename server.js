import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import routes from "./src/routes"
const app = express();
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
app.listen(4040,() =>{
    console.log ("server is running on port 4040");
})
export default app