const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article");

const BASE_URL = "https://beyondchats.com/blogs";

const scrapeOldestBlogs = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    const $ = cheerio.load(data);

    // Select all blog cards
    const blogCards = $("article");

    if (blogCards.length === 0) {
      console.log(" No blog articles found");
      return;
    }

    // Take LAST 5 blogs = oldest
    const oldestBlogs = blogCards.slice(-5);

    for (let i = 0; i < oldestBlogs.length; i++) {
      const el = oldestBlogs[i];

      const title = $(el).find("h2").text().trim();
      let url = $(el).find("a").attr("href");

      if (!url) continue;

      // Fix relative URL
      if (!url.startsWith("http")) {
        url = "https://beyondchats.com" + url;
      }

      await Article.updateOne(
        { url },
        { title, url },
        { upsert: true }
      );
    }

    console.log(" Oldest 5 blogs scraped & saved");
  } catch (err) {
    console.error("Scraping error:", err.message);
  }
};

module.exports = scrapeOldestBlogs;
