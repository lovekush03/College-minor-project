import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './Components/BlogPage';
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Navbar from "./Components/Navbar";
// import MainPage from './Components/MainPage';
// import Faq from './Components/Faq';
// import Footer from './Components/Footer'
// import Dice from "./Components/Dice"
// import Platform from "./Components/Platform"
// import Community from './Components/Community';
// import EventPage from './Components/EventPage';
// import ContactPage from "./Components/ContactPage";

function HomePage() {
  return (
    <>
      {/* <Navbar />
      <MainPage />
      <Dice/>
      <Platform/>
      <Community/>
      <Faq/>
      <Footer/> */}
      <BlogPage/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/events" element={<EventPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />   */}
      </Routes>
    </Router>
  );
}

export default App;

