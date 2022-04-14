const http = require("http");
const fs = require("fs");

const serv = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    var path = "./Exam/";
    switch(req.url){
        case "/": 
            path += "index.html";
            break;
        case "/about":
            path += "about.html";
            break;
        case "/about-me": 
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();
            break;
        default:
            path += "err.html";
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else{
            console.log(path);
            res.end(data);
        }
    });
});

serv.listen(3000, "localhost", () => {
    console.log("Server started on port 3000");
});