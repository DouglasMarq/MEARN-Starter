// --- index.js ---
// • This is the start (entry-point) of our application.
// • Mongoose is used to make communication with MongoDB easy and simple
// -----------------------------------------------------------------------------

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// Settings file
const config = require('./config');
const { server } = config

// • Creating Express instance. Later we will use this to declare routes
const app = express();
// • `/dist` is default file output of ng build command. You can change
// that on `angular-cli.json` config file but don't forget to change below line
// too or server will not be able to locate our front-end part of application.
app.use(express.static(path.join(__dirname, 'dist')))

// • This is a special method called `middleware`. Every request will be
// executed on each request. If you want to exclude a specific route to make it
// not enter on this middleware, simply declare that route before this function
app.use('/', function (req, res, next) {
  // • Implement your logic here.
  console.log('Time:', Date.now())
  next()
})
// • Every other route not declared above will redirect us to Angular view
// called `index.html`. Be sure you have builded and created output files from
// angular app.
app.get('*', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})    
// • Start listening on port 3000 for requests.
app.listen(server.serverPort, () => console.log(`Application started successfully on port: ${server.serverPort}!`))