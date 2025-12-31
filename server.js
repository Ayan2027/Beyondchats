const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const scrapeBlogs = require("./scraper/scrapeBlogs");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/articles", require("./routes/articleRoutes"));

// Scrape once on server start
scrapeBlogs();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
