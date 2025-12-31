const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true, unique: true },
    content: { type: String },
    publishedAt: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", ArticleSchema);
