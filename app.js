const express=require("express");
const app=express();
const multer =require("multer");
const s3Upload=require("./aws-s3");

const storage=multer.memoryStorage({
    destination:function(req,file,callback){
        callback(null,'');
    }
})

const upload=multer({storage}).single('file');
app.get("/",(req,res)=>{
    res.json("Server Running")
})

app.post("/api/upload",upload,async(req,res)=>{
   const fileNAme= await s3Upload(req.file);

    res.json({message:"Success",fileName:fileNAme});

})

app.listen(9090,(req,res)=>{
    console.log("Server Running At port 9090")
})