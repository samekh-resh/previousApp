const express = require('express')
const app = express()
// const bodyParser = require('body-parser')


// const http = require("http");
// const fs = require("fs"); //module (library) that allows you to read the fle system
const url = require("url"); //allows you to look at the url path to find what needs to be found
const querystring = require("querystring"); //enables us to look at query parameters in our url
// const figlet = require("figlet"); //allows your 404 to look  little fanciers

//we create the public folder, enables us to use EJS
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
// import {create} from modules/canvas.js
app.listen(1001, () => {
  console.log('we are listening on port 1001')
});
// const server = http.createServer(function (req, res) {
//   const page = url.parse(req.url).pathname; //where the app listen takes place

app.get('/', (req, res) => {
  res.render('index.ejs', {theName: ['tiara', 'calamel', 'aleph', 'miria']})
})

app.get('/api', (req, res) => {
  const params = querystring.parse(url.parse(req.url).query);
  if ('guess' in params) {
  }
  let coinToss = Math.floor(Math.random() * 2)

  // res.writeHead(200, { "Content-Type": "application/json" })
  const objToJson = {
    coinToss: coinToss ? true : false
  }

  const jsonContent = JSON.stringify(objToJson)
  console.log(`jsonContent: ${jsonContent}`)
  res.end(jsonContent)
  // res.objToJson()
})


//   console.log(page);
//   if (page == "/") {
//     fs.readFile("index.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/api") {
//     if('guess' in params){
//     }
//     let coinToss = Math.floor(Math.random() * 2)

//     res.writeHead(200, { "Content-Type": "application/json" });
//     const objToJson = {
//       coinToss: coinToss ? true : false //this line is a ternary which is saying if cointoss is 1 we return true and if it's 0 we return false, which can then be compared to the player guess of true vs false, as opposed to comparing true to 1 and false to 0
//     };

//     res.end(JSON.stringify(objToJson));
//     //student = leon
//   } //else if
//   else if (page == "/style.css") {
//     fs.readFile("style.css", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/script.js") {
//     fs.readFile("script.js", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/javascript" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/tails.svg") {
//     //for image
//     fs.readFile("tails.svg", function (err, data) {
//       res.writeHead(200, { "Content-Type": "image/svg+xml" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/heads.svg") {
//     //for image
//     fs.readFile("heads.svg", function (err, data) {
//       res.writeHead(200, { "Content-Type": "image/svg+xml" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     figlet("404!!", function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });
// server.listen(8003);

//call is the flip button or the reset button /api/guessHeads
///api/guessTails
///api/flipCoin
///api/resetGame
