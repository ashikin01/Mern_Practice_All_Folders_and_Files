import express from 'express';


const port=8080;
const app=express();

app.listen(port,()=>{
    
})

app.get("/form", (req,res)=>{
    let {name,email}=req.query;
    res.send(`It is get response and Your name is: ${name} and Email is ${email}`);

})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/form", (req,res)=>{
    console.log(req.body);
    let {name,email}=req.body;
    res.send(`This is post request and your name is : ${name} and your email is ${email}`);
})


