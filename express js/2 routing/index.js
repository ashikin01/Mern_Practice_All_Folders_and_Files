import express from 'express'
const app = express()

const port=3000;

app.listen(port, ()=>{
    console.log(`we are listening ${port}`)
})

app.get("/", (req,res)=>{
    res.send("I am root");
})
app.get("/apple", (req,res)=>{
    res.send("You are at apple");
})
app.get("/google", (req,res)=>{
    res.send("You are at google");
})
app.get("/{*splat}", (req,res)=>{
    res.send("This path does not exist");
})

app.post("/",(req,res)=>{
    res.send("you send a post request");
})