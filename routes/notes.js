// using router method of express?
const ns = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET route for retrieving all the notes
ns.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for submitting notes
ns.post('/notes', (req, res) => {
    // destructuring assignment for items in re.body
    const { title, text } = req.body;
    // if all the required properties are present
    if (title && text) {
        // variable for the object will save
        const newNote = {
            title,
            text
        }
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        }
        res.json(response);
    } else {
        res.json('Error in submitting note');
    }
})

module.exports = ns;