
const express = require('express');


port = 3000;
const App = express();

App.set("view engine", "ejs")

App.use((req, res) => {
    switch(req.url){
        case "/welc": 
            res.render("yes")
            break;
        case "/bye": 
        res.render("no")
            break;
        case "/welcome":
            res.redirect("/welc")
            break;
        case "/goodbye": 
            res.redirect("/bye")
            break;
        case "/":
            res.redirect("/welc")
            break;
        case "/set/:name/:lName/:matricule":
            const {name, lName, matricule} = req.params
            res.send(`
                <head><title>Rattrapage</title></head>
                <p> Your name is: ${name} </p>
                <p> Your last name is: ${lName} </p>
                <p> Your matricule is: ${matricule} </p>`
            )
            break;
        default:
            res.render("oups")
    }
})

App.listen(port, () => {

    console.log(`Server enabled on the port ${port}`);

})