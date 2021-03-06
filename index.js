const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");




const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log("MongoDb connected");
}).catch((err)=>
console.log(err)
);

const PORT=process.env.PORT || 8080;



app.listen(PORT,()=>{
  console.log("server running")
})
