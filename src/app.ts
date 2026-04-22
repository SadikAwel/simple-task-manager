import express from "express";
import router from "../src/routes/task.route.js"

import {errorMiddleware} from "./config/container.js"
const app  = express();

app.use("/api", router) 

app.get("", (req, res) => {
  res.send("<h1>for server file</h1>")
  console.log("this work correctly: ")
  return;
})

app.use(errorMiddleware);


const port:number  = 3000
app.listen(port, ()=>{
  console.log(`server in port ${port} is started !!!!!`)
})

