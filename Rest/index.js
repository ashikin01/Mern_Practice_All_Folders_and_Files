import express from 'express';
import path from 'path';

const port = 8080;
const app=express();

app.set("view engine","ejs");
app.set("views",path.join(import.meta.dirname, "/views"));
app.use(express.static(path.join(import.meta.dirname,"/public"))); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(port,()=>{ 
    console.log("Port is listening");
})

let posts=[
    {
        username:"Asheke",
        post:"We all love Prophet Mohammad (pbuh)"
    },
    {
        username:"Nafi",
        post:"We all love cats"
    },
    {
        username:"Shimu",
        post:"We are human"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    res.redirect("/posts");
    let {username,post}=req.body;
    posts.push({username,post});
})