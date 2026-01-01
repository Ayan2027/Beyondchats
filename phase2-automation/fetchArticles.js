const axios = require("axios");

async function fetchArticles() {
  try {
    const res = await axios.get(process.env.ARTICLES_API);
    return res.data;
  } catch (err) {
    console.error("Error fetching articles:", err.message);
    return [];
  }
}

module.exports = fetchArticles;
