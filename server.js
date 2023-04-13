const express = require("express");

const mongoose = require("mongoose");
const stadiumRouter = require("./router/stadiumRouter");
const port = 4242;
const url = "mongodb://127.0.0.1/stadiumDb";
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.use("/api", stadiumRouter);
app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to my express api"})
})

app.listen(port,()=>{
  console.log("server is now listening on port")
})
