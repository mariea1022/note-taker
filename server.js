const express = require('express');
const path = require('path');
const { middleware } = require('./middleware/middleware');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(middleware)

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use('/api', api)

// will direct to the home page
app.use(express.static('public'));

// GET route for homepage/ ^ same as above
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at ${PORT}`)
);