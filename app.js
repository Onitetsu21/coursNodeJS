const express = require("express")

const app = express()

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon/favicon.ico'));

app.listen(3005)

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use((req, res, next)=> {
    console.log(req.url);
    next()
})

app.get("/",(req, res)=> {
    const people = {
        name : ["bob", "mamadou", "élise", "yumi"],
        sayHello : "hello"
    }
    res.render("home", {people})
})

app.get("/about",(req, res)=> {
    res.render("about")
})

app.use((req, res)=> {
    res.status(404).render("404")
})
