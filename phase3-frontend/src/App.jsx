import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading articles...</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>BeyondChats Articles</h1>

      {articles.map(article => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "20px"
          }}
        >
          <h2>{article.title}</h2>

          <p>
            <a href={article.url} target="_blank">
              Original Article
            </a>
          </p>

          {article.content ? (
            <>
              <h4>Updated Version</h4>
              <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      background: "#1e1e1e",
                      color: "#eaeaea",
                      padding: "16px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      overflowX: "auto"
                    }}
                  >
                    {article.content}
              </pre>

            </>
          ) : (
            <p><i>No updated content yet</i></p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
