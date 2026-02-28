import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}));

app.get("/",async (req,res)=>{
   res.status(200).json({
      message:"hello man",
   });
  
});
const connectDB = ()=>{
   mongoose.set("strictQuery",true);
   mongoose.connect(process.env.MONGODB_URL)
   .then((res)=>{
      console.log("connecet to mongodb");
   }).catch((err)=>{
      console.log(err);
   });

}
const startServer = async ()=>{
   try{
      connectDB();
      app.listen(8080,()=>{
         console.log("Server running on port 8080");
      })
   }catch(err){
      console.log(err);
   }
}
startServer();