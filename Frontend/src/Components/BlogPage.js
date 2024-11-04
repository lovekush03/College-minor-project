import React, {useState} from "react";
import "../CSS/BlogPage.css";
import BlogNav from "./BlogNav";
import MainBlogPost from "./MainBlogPost";
import BlogPost from "./BlogPost";
import Footer from "./Footer.js";
// //Carousel for Blog Posts
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const BlogPage = () => {
  const [theme , setTheme] = useState("light");
  const passTheme = (currentTheme) => {
    console.log("Current Theme: ", currentTheme);
    setTheme(currentTheme);
  }
  return (
    <>
        {/* NavBar Blog Page */}
        <BlogNav toggleTheme={passTheme}/>
        {/* Main Blog Post */}
        <MainBlogPost mode={theme}/>
        {/* Remaining Blog Posts */}
        <BlogPost mode ={theme}/>
        {/* Footer Default */}
        <Footer />
    </>
  );
};

export default BlogPage;
