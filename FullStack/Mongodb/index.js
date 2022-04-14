const mongoose = require("mongoose"),
  express = require("express"),
  User = require("./user"),
  app = express();
port = 3000;

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/set/:firstName/:lastName/:email/:matricule", async (req, res) => {
  const { firstName, lastName, email, matricule } = req.params;
  const user = await User.CreateUser(
    firstName,
    lastName,
    email,
    Number(matricule)
  );
    res.send(`<p>Name: ${firstName} ${lastName}</p>
              <p>Email: ${email}</p>
              <p>Matricule: ${matricule}</p>`);
    
});

app.get("/getByName/:name", async (req, res) => {
    const {name} = req.params
    const user = await User.getByName(name);
    res.send(`<p>Name: ${name} ${user[0]? user[0].lastName:null}</p>
    <p>Email: ${user[0]? user[0].email:null}</p>
    <p>Matricule: ${user[0]? user[0].matricule:null}</p>`)
})
app.get("/getByLastName/:lastName", async (req, res) => {
    const {lastName} = req.params
    const user = await User.getByLastName(lastName);
    res.send(`<p>Name: ${user[0]? user[0].firstName:null} ${lastName}</p>
    <p>Email: ${user[0]? user[0].email:null}</p>
    <p>Matricule: ${user[0]? user[0].matricule:null}</p>`)
})
app.get("/getByMail/:mail", async (req, res) => {
    const {mail} = req.params
    const user = await User.getByMail(mail);
    console.log(user, mail);
    res.send(`<p>Name: ${user[0]? user[0].firstName:null} ${user[0]? user[0].lastName:null}</p>
    <p>Email: ${mail}</p>
    <p>Matricule: ${user[0]? user[0].matricule:null}</p>`)
})
app.get("/getByMatricule/:mat", async (req, res) => {
    const {mat} = req.params
    const user = await User.getByMatricule(mat);
    res.send(`<p>Name: ${user[0]? user[0].firstName:null} ${user[0]? user[0].lastName:null}</p>
    <p>Email: ${user[0]? user[0].email:null}</p>
    <p>Matricule: ${mat}</p>`)
})

mongoose
  .connect(
    "mongodb+srv://ORDISTAR:W1tSyc8yAYwJtYKU@firstcluster.2aihe.mongodb.net/test"
  )
  .then((connection) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server started at port " + port);
});
