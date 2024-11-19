import React from 'react';
import "../CSS/EventCard.css";

const EventCard = ({ imgSrc, title, location, price, date, description, link }) => {
  return (
    <div className="event-card-container">
      {/* <div className="event-card-img-container">
        <img src={imgSrc} alt={title} />
      </div> */}

      <div className="event-card-body-container">
        <div className="event-card-overlay"></div>

        <div className="event-card-info-container">
          <p className="event-card-title">{title}</p>
          <div className="event-card-separator"></div>
          <p className="event-card-location">{location}</p>
          <p className="event-card-price">{price}</p>

          <div className="event-card-additional-info">
            <p className="event-card-date">
              <i className="far fa-calendar-alt"></i>
              {date}
            </p>

            <p className="event-card-description">
              {description} <span>more...</span>
            </p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <button className="event-card-action-button">Register it</button> {/* Change button text here */}
        </a>
      </div>
    </div>
  );
};

export default EventCard;
