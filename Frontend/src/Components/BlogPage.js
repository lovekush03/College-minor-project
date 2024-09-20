import React from "react";
import "../CSS/BlogPage.css";
import BlogPost from "./BlogPost";
import BlogNav from "./BlogNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
        {/* NavBar Blog Page */}
        <BlogNav />
        {/* Blog Post */}
        <BlogPost />
        <BlogPost />
        <BlogPost />
    </>
    //   </Routes>
    // </Router>
  );
};

export default BlogPage;
