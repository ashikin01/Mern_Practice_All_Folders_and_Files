import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from "uuid";
import methodOverride from "method-override";


const port = 8080;
const app=express();

app.set("view engine","ejs");
app.set("views",path.join(import.meta.dirname, "/views"));
app.use(express.static(path.join(import.meta.dirname,"/public"))); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.listen(port,()=>{ 
    console.log("Port is listening");
})

let posts=[
    {
        username:"Asheke",
        post:"We all love Prophet Mohammad (pbuh)",
        id:"1a"
    },
    {
        username:"Nafi",
        post:"We all love cats",
        id:"2a"
    },
    {
        username:"Shimu",
        post:"We are human",
        id:"3a"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,post}=req.body;
    posts.push({username,post,id});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((post)=>id===post.id);
    console.log(post);
    if(post){
    res.render("show.ejs",{post});
    }
    else{
        res.render("error_post.ejs")
    }
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id==p.id);
    res.render("edit.ejs",{post});
    
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let oldPostObj=posts.find((p)=>id==p.id);
    
    let {post}=req.body;
    oldPostObj.post=post;
    res.redirect("/posts")
    
})

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts")
    
})