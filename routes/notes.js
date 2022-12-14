// using router method of express?
const ns = require("express").Router();
const uuid = require("../helpers/uuid");
const {
  readAndAppend,
  readFromFile,
  findByIdAndDelete,
} = require("../helpers/fsUtils");

// GET route for retrieving all the notes
ns.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST route for submitting notes
ns.post("/", (req, res) => {
  // destructuring assignment for items in req.body
  const { title, text } = req.body;
  // if all the required properties are present
  if (title && text) {
    // variable for the object will save
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error in submitting note");
  }
});

ns.delete("/:id", function (req, res) {
  
  const requestedId = req.params.id;

  findByIdAndDelete(requestedId, "./db/db.json");
  res.json("success")
});

// Return a message if the id doesn't exist in our DB
//   return res.json('No ID found');

//   });

module.exports = ns;
