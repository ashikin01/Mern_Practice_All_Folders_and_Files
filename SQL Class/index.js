import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';
import express, { urlencoded } from 'express';
import { fileURLToPath } from "url";
import path from "path";
import methodOverride from 'method-override';
import { v4 as uuidv4 } from "uuid";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ashikin',
  database: 'delta_app',
});

// let getRandomUser= ()=> {
//   return [
//    faker.string.uuid(),
//     faker.internet.username(),
//   faker.internet.email(),
//  faker.internet.password()
//   ] 
// }
// const q="INSERT INTO user (id,name,email,password) VALUES ?";
// const user_arr=[ ];

// for (let index = 0; index < 100; index++) {
//   const element = getRandomUser();
//   user_arr.push(element);
// }




const port = 8080;
app.listen(port, () => {
  console.log("we are listening: " + port);
})

app.get("/", async (req, res) => {
  const q = "SELECT count(*) FROM user";
  try {
    const [results, fields] = await connection.query(q);
    let user_count = results[0]["count(*)"];
    res.render("home", { user_count })
  } catch (error) {
    console.log(error);
  }

})

app.get("/user", async (req, res) => {
  const q = "SELECT * FROM user";
  try {
    const [results, fields] = await connection.query(q);
    let users = results;
    res.render("show_user", { users })
  } catch (error) {
    console.log(error);
  }

})


//edit page

app.get("/user/:id/edit", async (req, res) => {
  let { id } = req.params;
  const q = `SELECT * FROM user WHERE id=?`;
  try {
    const [results, fields] = await connection.query(q, [id]);
    let result = results[0];
    res.render("edit_form", { result });

  } catch (error) {
    console.log(error);
  }


})

//update or patch

app.patch("/user/:id", async (req, res) => {
  let { id } = req.params;
  let { name: newUserName, password: password } = req.body;

  const q = `SELECT * FROM user WHERE id=?`;
  try {
    const [results, fields] = await connection.query(q, [id]);
    let result = results[0];
    if (result.password == password) {
      
      const q = `UPDATE user SET name=? WHERE id=?`;
      try {
        const [results] = await connection.query(q, [newUserName, id]);
        res.redirect("/user");

      } catch (error) {
        console.log(error);
      }
    }
    else{
      res.send("Password didn't match");
    }

  } catch (error) {
    console.log(error);
  }

})




app.get("/user/new", async (req, res) => {
  res.render("add_new_member");
})


app.post("/user", async (req, res) => {
  let {name,email,password}=req.body;
  let q=`INSERT INTO user (id,name,email,password) VALUES ?`;
  try {
    let id=uuidv4();
    await connection.query(q, [[[id,name,email,password]]]);
    res.redirect("/user");
  } catch (error) {
    res.send("Error occured the error is : "+error);
  }

})


app.delete("/user/delete", async (req, res) => {
  let {id}=req.body;
  let q=`DELETE FROM user WHERE id = ?;`;
  try {
    await connection.query(q, [id]);
    res.redirect("/user");
  } catch (error) {
    res.send("Error occured the error is : "+error);
  }

})
// connection.end();
// console.log(getRandomUser());