require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const whisperRoutes = require("./routes/whisperRoutes.js");



const noteRoutes = require("./routes/noteRoutes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/notes", noteRoutes);
// app.use("/api/whisper", whisperRoutes);


// test route
app.get("/", (req, res) => {
  res.send("Voice Notes Backend Running 🚀");
});

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    const PORT=process.env.PORT || 5000
    app.listen(5000, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
