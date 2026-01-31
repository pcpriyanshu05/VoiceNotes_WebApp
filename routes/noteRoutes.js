const express = require("express");
const router = express.Router();
const {
  createNote,
  getNotes,
  deleteNote,
  updateNote,
} = require("../controllers/noteController");

router.post("/", createNote);
router.get("/", getNotes);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);


module.exports = router;
