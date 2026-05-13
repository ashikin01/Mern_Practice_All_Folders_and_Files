import express from 'express';
import path from 'path';

const app=express();
let port=8080;

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

app.set("view engine","ejs");
app.set("views",path.join(import.meta.dirname, "/views"));


app.get("/instagram/:username", (req,res)=>{
    let {username}=req.params;
    let arr=["Mango","Apple","Banana"];
    res.render("home",{username,arr});
})