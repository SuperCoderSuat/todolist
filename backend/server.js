// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Konfiguration für Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/"); // Dateien werden im 'uploads'-Verzeichnis gespeichert
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Endpoint zum Hochladen einer PDF-Datei
app.post("/api/upload", upload.single("pdf"), (req, res) => {
  res.json({ message: "PDF successfully uploaded" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
