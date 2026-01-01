const axios = require("axios");

async function googleSearch(query) {
  try {
    const res = await axios.post(
      "https://google.serper.dev/search",
      { q: query },
      {
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return res.data.organic
      .filter(r => r.link)
      .slice(0, 2)
      .map(r => r.link);
  } catch (err) {
    console.error("Google search error:", err.message);
    return [];
  }
}

module.exports = googleSearch;
