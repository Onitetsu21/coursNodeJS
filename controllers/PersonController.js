const mongoose = require('mongoose')
const Person = require("../models/Person")

class PersonController {

    createPerson(){
        Person.create({
            firstName: "test1",
            lastName: "test2",
            age: 12
        })
    }
    
    findAllPerson(){
        Person.find()
            .then(res => {
               return res
            })
    }
    
    
}

module.exports = PersonController