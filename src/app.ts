import express from "express";
const app  = express();


app.get("", (req, res) => {
  res.send("<h1>for server file</h1>")
  console.log("this work correctly: ")
  return;
})


const port:number  = 3000
app.listen(port, ()=>{
  console.log(`server in port ${port} is started !!!!!`)
})

