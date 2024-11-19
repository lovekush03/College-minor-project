import React from "react";
import EventCard from "./EventCard";
import "../CSS/EventPage.css";

const events = [
  {
    imgSrc: "../assets/download.jpeg",
    title: "Code Clash Championship",
    location: "San Francisco, CA",
    price: "Free",
    date: "Sat, Sep 23, 10:00 AM PDT",
    description:
      "Join the ultimate coding competition and showcase your skills! Participate in solo or team challenges and win amazing prizes!",
    link:"https://www.lidonation.com/sw/proposals/blockchain-battle-royale-hackathon-f8"
    
  },
  {
    imgSrc: "../assets/images (1).jpeg",
    title: "Hackathon Hackfest",
    location: "New York, NY",
    price: "Free",
    date: "Sat, Oct 1, 9:00 AM EDT",
    description:
      "Compete in the biggest hackathon of the year! Teams will have 48 hours to build innovative solutions to real-world problems.",
      link:"https://mlh.io/"
  },
  {
    imgSrc: "../assets/images (2).jpeg",
    title: "Algorithm Battle Royale",
    location: "Los Angeles, CA",
    price: "Free",
    date: "Fri, Oct 15, 8:00 AM PDT",
    description:
      "Test your algorithmic skills in this fast-paced coding competition. Solve problems under pressure and become the ultimate coding warrior!",
      link:"https://open.kattis.com/contests"
  },
  {
    imgSrc: "../assets/images.jpeg",
    title: "DevOps Game Jam",
    location: "Austin, TX",
    price: "Free",
    date: "Sun, Nov 7, 11:00 AM CST",
    description:
      "Participate in this DevOps coding challenge and learn from the best in the industry. Develop tools and solutions in a collaborative environment.",
    link:"https://microsoft.github.io/WhatTheHack/044-DevOpswithGithubActions/"
  },
];

const EventsPage = () => {
  return (
    <div className="events-page-body">
      <div className="events-page-container">
        <h1 className="events-page-title">Top Coding Competitions</h1>
        <div className="events-card-container">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
