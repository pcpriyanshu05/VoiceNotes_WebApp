// const fs = require("fs");
// const OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// exports.transcribeAudio = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No audio file provided" });
//     }

//     const transcription = await openai.audio.transcriptions.create({
//       file: fs.createReadStream(req.file.path),
//       model: "whisper-1",
//     });

//     res.json({
//       text: transcription.text,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Whisper transcription failed" });
//   }
// };
