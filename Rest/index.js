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
    
    let {username,post}=req.body;
    posts.push({username,post});
    res.redirect("/posts");
})

app.get("/post/:id",(req,res)=>{
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