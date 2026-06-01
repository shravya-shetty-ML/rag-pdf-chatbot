const express = require("express");
const multer = require("multer");

const {
  chunkText,
} = require("../services/chunkService");

const {
  extractTextFromPDF,
} = require("../services/pdfService");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/",
  upload.single("pdf"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }

      const result = await extractTextFromPDF(
        req.file.path
      );

      const chunks = chunkText(result.text);

      res.json({
  message: "PDF processed successfully",
  pages: result.pages,
  totalChunks: chunks.length,
  firstChunk: chunks[0],
});
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Failed to process PDF",
      });
    }
  }
);

module.exports = router;