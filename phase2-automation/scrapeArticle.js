const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticle(url) {
  try {
    const { data } = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });

    const $ = cheerio.load(data);
    let content = "";

    // 1️⃣ Try article tag first
    if ($("article").length) {
      $("article p").each((i, el) => {
        const text = $(el).text().trim();
        if (text.length > 80) {
          content += text + "\n";
        }
      });
    }

    // 2️⃣ Fallback to all paragraphs
    if (content.length < 300) {
      $("p").each((i, el) => {
        const text = $(el).text().trim();
        if (
          text.length > 80 &&
          !text.toLowerCase().includes("copyright") &&
          !text.toLowerCase().includes("government")
        ) {
          content += text + "\n";
        }
      });
    }

    // 3️⃣ Final safety limit
    return content.slice(0, 3500);

  } catch (err) {
    console.error("Scraping error:", err.message);
    return "";
  }
}

module.exports = scrapeArticle;
