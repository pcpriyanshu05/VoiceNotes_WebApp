const Note = require("../models/Note");

// save note
exports.createNote = async (req, res) => {
  try {
    const { text, language } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Note text is required" });
    }

    // 🔍 check for duplicate note
    const existingNote = await Note.findOne({
      text: text.trim(),
    });

    if (existingNote) {
      return res.status(409).json({
        message: "This note already exists",
      });
    }

    const note = await Note.create({
      text: text.trim(),
      language,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    await note.deleteOne();

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update note
exports.updateNote = async (req, res) => {
  try {
    const { text } = req.body;

    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    note.text = text;
    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

