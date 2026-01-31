const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "en-US",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);
