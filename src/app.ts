import express from "express";
import router from "../src/routes/task.route.js"
import {env} from "./config/env.js"




import {errorMiddleware} from "./config/container.js"
const app  = express();

app.use(express.json()); // Parses JSON bodi
app.use(express.urlencoded({ extended: true })); 

app.use("/api", router) 

app.get("", (req, res) => {
  res.send("<h1>for server file</h1>")
  console.log("this work correctly: ")
  return;
})

app.use(errorMiddleware);


const port:number  = env.PORT
app.listen(port, ()=>{
  console.log(`server in port ${port} is started !!!!!`)
})

