require("dotenv").config();

const fetchArticles = require("./fetchArticles");
const googleSearch = require("./googleSearch");
const scrapeArticle = require("./scrapeArticle");
const rewriteWithLLM = require("./rewriteWithLLM");
const publishArticle = require("./publishArticle");

async function run() {
  const articles = await fetchArticles();

  for (const article of articles) {
    console.log("\nProcessing:", article.title);

    // 1️⃣ Google search
    const links = await googleSearch(article.title);

    // 2️⃣ Scrape content
    const scrapedContents = [];
    for (const link of links) {
      const text = await scrapeArticle(link);
      if (text.length > 200) {
        scrapedContents.push(text);
      }
    }

    // 3️⃣ Rewrite article
    const rewrittenContent = await rewriteWithLLM(
      article.title,
      scrapedContents,
      links
    );

    // 4️⃣ Publish back to API
    await publishArticle(article._id, rewrittenContent);

    console.log("✅ Finished:", article.title);
  }
}

run();
