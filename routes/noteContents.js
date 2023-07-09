const router = require("express").Router();
const Note = require("../models/noteContents");

router.post("/api/note", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    //save the requested item in database
    const saveNote = await newNote.save();
    res.status(200).json(saveNote);
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/notes", async (req, res) => {
  try {
    const allNotes = await Note.find({});
    res.status(200).json(allNotes);
  } catch {
    res.json(err);
  }
});

router.put("/api/note/:id", async (req, res) => {
  try {
    //find the note by its id and update it
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateNote);
  } catch (err) {
    res.json(err);
  }
});

router.delete("/api/note/:id", async (req, res) => {
  try {
    //find the note by its id and delete it
    const deleteNote = await Note.findByIdAndRemove(req.params.id);
    res.status(200).json("note deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
