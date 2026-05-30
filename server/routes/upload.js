const express = require("express");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  dest: "uploads/"
});

router.post("/", upload.single("pdf"), (req, res) => {
  console.log("FILE:", req.file);

  if (!req.file) {
    return res.status(400).json({
      message: "No file uploaded"
    });
  }

  res.json({
    message: "File uploaded successfully",
    originalName: req.file.originalname
  });
});

module.exports = router;