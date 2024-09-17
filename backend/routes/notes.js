const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get All the notes using Get :"/api/notes/fetchallnotes",Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server errors occuurred");
  }
});

// Route 2: Add new  notes using Post :"/api/notes/addnotes", Login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // If there are errors  return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server errors occuurred");
    }
  }
);
// Route 3: Update the existing notes using Put :"/api/notes/updatenotes", Login required
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    //Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the node to be updated and update it
    let note = await Notes.findById(req.params.id);
    //Check the node actually exist or not
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // to check the user who is updating that note are the same user who have added that note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server errors occuurred");
  }
});
// Route 4: Delete the existing notes using Delete :"/api/notes/deletenotes", Login required
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  try {
    
    // Find the node to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    //Check the node actually exist or not
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // allow deletion of notes by the same user who have created this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Success ": "Notes has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server errors occuurred");
  }
});

module.exports = router;
