const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./notes');

const app = express();

//This have to be /nots for the notes page to have saved notes to the left
app.use('/notes', tipsRouter);

module.exports = app;
