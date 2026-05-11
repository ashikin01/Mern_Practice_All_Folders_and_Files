import express from 'express';
const app=express();
const port=3000;

app.listen(port, ()=>{
    console.log("we are listening");
})

app.get("/search", (req,res)=>{
    let {name,roll}=req.query;
    if(!name || !roll){
        res.send("nothing searched")
    }
    res.send(`<h1>Your name is ${name} and roll ${roll}</h1>`);
})