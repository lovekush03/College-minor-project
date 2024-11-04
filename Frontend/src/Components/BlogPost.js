import React, { useState, useEffect } from "react";
import BlogPostCard from "./BlogPostCard";

const BlogPost = ({ mode }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("technology");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchArticles = async () => {
    const blogapiKey = "3ceac5a162854305af4cfed76ab2e0b4"; // Replace with your News API key
    const blogUrl = `https://newsapi.org/v2/everything?q=${currentCategory}&language=en&pageSize=9&apiKey=${blogapiKey}`; // Limit to 9 articles

    const imageapiKey =
      "NNslZDWpWuCbP1CxwdYy1JmgPwy5ypa81Tvgy3TaUM57i8PbIn6s4B5E"; // Replace with your Pexels API key
    const imageURL = `https://api.pexels.com/v1/search?query=${currentCategory}&per_page=9`; // Limit to 9 images

    setLoading(true);
    setError(null);

    try {
      // Fetch articles
      const articleResponse = await fetch(blogUrl);
      const articleData = await articleResponse.json();

      // Filter out articles that have invalid or "[Removed]" titles/descriptions
      const filteredArticles = articleData.articles.filter(
        (article) =>
          article.title !== "[Removed]" &&
          article.description &&
          article.description !== "[Removed]"
      );

      if (filteredArticles.length > 0) {
        setArticles(filteredArticles); // Set only valid articles
      } else {
        setError("No valid articles found.");
      }

      // Fetch images
      const imageResponse = await fetch(imageURL, {
        headers: {
          Authorization: imageapiKey,
        },
      });
      const imageData = await imageResponse.json();
      if (imageData.photos && imageData.photos.length > 0) {
        setImages(imageData.photos); // Set images
      } else {
        setError("No images found.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentCategory]); // Dependency on currentCategory

  if (loading)
    return (
      <div className="loader-container" style={{backgroundColor:mode === "dark" ? "2b3035":""}}>
        <div className="loader"></div>
      </div>
    );
  if (error) return <p>{error}</p>;

  // Helper Function to remove spaces from the search query
  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      alert("Enter a Topic to Search Blogs for");
      return;
    }
    const arr = searchQuery.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    setCurrentCategory(result);
    fetchArticles();
  };

  return (
    <div style={{backgroundColor: mode === "dark" ? "#2b3035" : "",}}>
      <div
        className="container"
        style={{
          width: "80vw",
          paddingTop: "2rem",
          minHeight: "50vw",
        }}
      >
        <div className="main-bar d-flex justify-content-between">
          <h2 style={{color: mode === "dark" ? "#fff":""}}>Latest Articles</h2>
          <div className="button-tab">
            <button
              type="button"
              className={`btn btn-${mode} ${
                currentCategory === "technology" ? "active" : ""
              }`}
              style={{ border: "1px solid black" }}
              onClick={() => setCurrentCategory("technology")}
            >
              Technology
            </button>
            <button
              type="button"
              className={`btn btn-${mode} ${
                currentCategory === "cryptocurrency" ? "active" : ""
              }`}
              style={{ border: "1px solid black", margin: "0 7px" }}
              onClick={() => setCurrentCategory("cryptocurrency")}
            >
              Cryptocurrency
            </button>
            <button
              type="button"
              className={`btn btn-${mode} ${
                currentCategory === "coding" ? "active" : ""
              }`}
              style={{ border: "1px solid black" }}
              onClick={() => setCurrentCategory("coding")}
            >
              Coding
            </button>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => handleSearch(searchQuery)}
            >
              Search
            </button>
          </form>
        </div>
        <div className="row mt-4 blog-tab">
          {/* Render Articles in a Grid */}
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={article.url}>
              <BlogPostCard article={article} image={images[index]} theme={mode}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
