const express = require('express');

// import middleware
const { middleware } = require('../middleware/middleware');

// import modular routers for notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

// initialize middleware
app.use(middleware);

module.exports = app;