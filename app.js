const express = require("express")
const mongoose = require('mongoose');
const Person = require("./models/Person")
const PersonController = require("./controllers/PersonController")

const app = express()

const dbUri = "mongodb+srv://alix:KH8V3yYSsjqCfjg@clusteralix.pff0a.mongodb.net/test"

mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log("(〃￣︶￣)人(￣︶￣〃)  Connected to database !")
        app.listen(3005, ()=> console.log("(☞ﾟヮﾟ)☞  Connected to port 3005 !"))})
    .catch(err=>console.log(err));


// Person.create({
//     firstName: "test1",
//     lastName: "test2",
//     age: 12
// })

// Person.find()
//     .then(res => {
//         console.log(res)
//     })

// Person.findById("60a3c350e283704c78a3b519")
//     .then(res => {
//         console.log(res);
//     })

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon/favicon.ico'));

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.use((req, res, next)=> {
    console.log(req.url);
    next()
})

app.get("/",(req, res)=> {
    const people = ["john", "yumi"]
    console.log(people)
    res.render("home", {people})
})

app.get("/about",(req, res)=> {
    res.render("about")
})

app.use((req, res)=> {
    res.status(404).render("404")
})
