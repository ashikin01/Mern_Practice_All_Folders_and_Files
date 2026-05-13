import express from 'express';
const app=express();

const port=3000;
app.listen(port,()=>{
    console.log("we are listening")
})

app.get("/:username/:id", (req,res)=>{
    let {username}=req.params;
    let {id}=req.params;
    let code=`<h1>Your username:${username}  and your id is ${id}</h1>`
    res.send(code)
})