const fs = require("fs");

// function readAFile(){
//     fs.readFile("./docs/doc.txt", (err, data) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data.toString());
//         }
//     })
// }

// const newTxt = "hellooooooo"

// fs.writeFile("./docs/doc.txt", newTxt, ()=> {
//     readAFile()
// })

fs.mkdir("./newDir", () => console.log("directory created"));
