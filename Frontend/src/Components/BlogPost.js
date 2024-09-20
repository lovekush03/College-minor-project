import React from "react";

const BlogPost = () => {
  return (
    <div className="post container">
      <div className="image">
        <img
          src="https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/ChatGPT-vs-Bard-c.png"
          alt="BlogImage"
        />
      </div>
      <div className="texts">
        <h2>Bard vs ChatGPT: What’s the difference?</h2>
        <p className="info">
          <span className="author">Dawid Paszko</span>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          The biggest difference between ChatGPT and Bard is the Large Language
          Models (LLMs) they are powered by. ChatGPT uses the Generative
          Pre-trained Transformer 4 (GPT-4), while Bard uses the Language Model
          for Dialogue Applications (LaMBDA). Also, ChatGPT is developed by
          OpenAI, while Bard was built by Google.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
