import React from 'react';

const BlogPostCard = ({ article, image, theme }) => {
  if (article.title === "[Removed]" || article.description === "[Removed]") {
    return null;  // Do not render the card if title or description is "[Removed]"
  }

  return (
    <div 
      className="blog-post-card mb-4" 
      style={{
        width: '18rem',
        borderRadius: "10px",
        height: "100%",  // Allow the card to expand to its container
        boxShadow: theme === "dark" ? "0 2px 4px rgba(0, 0, 0, 0.5)":"0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        display: 'flex',
        flexDirection: 'column',
        borderColor:theme === "dark" ? "#444": " "
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 12px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image ? image.src.medium : 'https://via.placeholder.com/300'}
        className="blog-post-card-img-top"
        alt={image ? image.alt : 'Placeholder'}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: "10px 10px 0 0", // Rounded corners on the top
        }}
      />
      <div className="blog-post-card-body" style={{ padding: "15px", backgroundColor: theme === "dark" ? "#2c2c2e" :"#fff", flex: '1', position: 'relative', paddingBottom: '50px' }}>
        <h5 
          className="blog-post-card-title font-heading fw-bold pt-2 pb-2" 
          style={{ fontSize: "1.2rem", color: theme === "dark" ? "#ffffff" :"#333", lineHeight: "1.4em" }}
        >
          {article.title}
        </h5>
        <p 
          className="blog-post-card-text font-text fw-light"
          style={{ color: theme ==="dark" ? "#bbbbbb" :"#777", fontSize: "0.9rem", lineHeight: "1.6em", marginBottom: "1rem", maxHeight: "50px", overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {article.description || 'No description available.'}
        </p>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{
            backgroundColor: theme==="dark" ? "#4db8ff" :"#3498db",
            borderColor: "#3498db",
            padding: "10px 15px",
            fontSize: "0.9rem",
            transition: "background-color 0.3s ease",
            position: 'absolute',
            bottom: '15px',
            left: '15px',  // Position the button at the bottom left
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#2980b9"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#3498db"}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
