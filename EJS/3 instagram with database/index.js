import express from 'express';
import path from 'path';
import data from './data.json' with {type: 'json'};

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("listening: " + port)
})

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "/views"));

app.get("/instagram/:username", (req, res) => {
    let { username } = req.params;
    let data2 = data[username];
    
    if (data2) {
        res.render("home.ejs", { username, data2 });
        console.log(data2.name);
    }
    else{
        res.render("error")
    }



})

