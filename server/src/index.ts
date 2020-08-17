// --- index.ts ---
// • This is the start (entry-point) of our application.
// • Mongoose is used to make communication with MongoDB easy and simple
// -----------------------------------------------------------------------------

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// • Creating Express instance. Later we will use this to declare routes
// const app = express();
const bodyParser = require('body-parser')

// Settings file
const config = require('./config');
// joi let us confirm each route schema
const joi = require('joi')

const app = require('./api')({
  express,
  config,
  bodyParser,
  joi
})
// const server = config.server;
const { server } = config

app.listen(server.serverPort, () => {
  console.log(`Application started successfully on port: ${server.serverPort}!`)
})