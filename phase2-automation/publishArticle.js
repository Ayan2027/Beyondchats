const axios = require("axios");

async function publishArticle(articleId, updatedContent) {
  try {
    await axios.put(
      `${process.env.ARTICLES_API}/${articleId}`,
      {
        content: updatedContent
      }
    );
    console.log("✅ Article updated in DB");
  } catch (err) {
    console.error("Publish error:", err.message);
  }
}

module.exports = publishArticle;
