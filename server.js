const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "home.html";
            break;
        case "/about":
            path += "about.html";
            break;
        default:
            res.write("<p>not found</p>");
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data.toString());
        }
        res.end();
    });
    
});

server.listen(3000, "localhost", () => {
    console.log("listening on 3000");
});
