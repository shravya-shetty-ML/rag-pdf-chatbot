require("dotenv").config();

const uploadRoute = require("./routes/upload");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RAG PDF Chatbot Backend Running");
});

const PORT = process.env.PORT || 5000;

app.use("/upload", uploadRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});