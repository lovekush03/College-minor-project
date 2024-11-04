import React, { useState, useEffect } from "react";

const MainBlogPost = ({ mode }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const blogapiKey = "3ceac5a162854305af4cfed76ab2e0b4";
    const blogUrl = `https://newsapi.org/v2/everything?q=ML&language=en&pageSize=1&apiKey=${blogapiKey}`;

    const imageapiKey =
      "NNslZDWpWuCbP1CxwdYy1JmgPwy5ypa81Tvgy3TaUM57i8PbIn6s4B5E";
    const imageURL = "https://api.pexels.com/v1/search?query=ai&per_page=1";

    const fetchArticle = async () => {
      try {
        const response = await fetch(blogUrl);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticle(data.articles[0]); // Set the first article
        } else {
          setError("No articles found.");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    const fetchImage = async () => {
      try {
        const response = await fetch(imageURL, {
          headers: {
            Authorization: imageapiKey,
          },
        });
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
          setImage(data.photos[0]); // Set the first image from the result
        } else {
          setError("No images found.");
        }
      } catch (err) {
        setError("Error Fetching Image.");
      }
    };

    fetchArticle();
    fetchImage();
  }, []);

  if (loading)
    return (
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    );
  if (error) return <p>{error}</p>;

  const handleRedirect = (url) => {
    window.location.href = url; // Use the passed URL
  };

  // style={theme === "light" ? {} : {backgroundColor:"#333"}}
  return (
    <div style={{
      backgroundColor: mode === "dark" ? "#2b3035" : "",
      color: mode === "dark" ? "#fff" : "#000",
      transition: "background-color 0.3s ease, color 0.3s ease"
    }}>
      {console.log("Current Theme in main Blog: ",mode)}
      <div className="container d-flex justify-content-center align-items-center pt-4">
        <div
          className="main-blog-post row justify-content-center"
          style={{ width: "80vw" }}
        >
          <div className="main-blog-post-left col-6 d-flex flex-column justify-content-center align-items-center" >
            {article ? (
              <div>
                <h2
                  className="font-heading fw-bolder"
                  style={{ lineHeight: "1.2", fontSize: "2.2rem", color: mode === "dark" ? "#fff" : "" }}
                >
                  {article.title}
                </h2>
                <p
                  className="font-text fw-light"
                  style={{
                    fontSize: "1rem",
                    color: mode === "dark" ? "#fff" : "",
                    paddingTop: "15px",
                    lineHeight: "1.6",
                    paddingBottom: "10px",
                  }}
                >
                  {article.description.split(".")[0]}
                </p>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => handleRedirect(article.url)}
                >
                  Read more
                </button>
              </div>
            ) : (
              <p>No article available</p>
            )}
          </div>
          <div className="main-blog-post-right col-6 d-flex justify-content-center align-items-center">
            {image ? (
              <img
                src={image.src.medium}
                alt={image.alt}
                className="img-fluid"
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogPost;
