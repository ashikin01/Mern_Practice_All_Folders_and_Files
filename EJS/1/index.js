// const express=require("express");
// const app = express();
// const path=require("path");

import express from 'express';
import path from 'path';

 const app = express();
const port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname,"/views"));

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/random_number", (req,res)=>{
    let random=Math.floor(Math.random()*6) + 1;
    res.render("random_number", {random})
})