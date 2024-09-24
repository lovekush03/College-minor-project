import React from 'react';
import "../CSS/EventCard.css";

const EventCard = ({ imgSrc, title, location, price, date, description }) => {
  return (
    <div className="item-container">
      <div className="img-container">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="body-container">
        <div className="overlay"></div>

        <div className="event-info">
          <p className="title">{title}</p>
          <div className="separator"></div>
          <p className="info">{location}</p>
          <p className="price">{price}</p>

          <div className="additional-info">
            <p className="info">
              <i className="far fa-calendar-alt"></i>
              {date}
            </p>

            <p className="info description">
              {description} <span>more...</span>
            </p>
          </div>
        </div>
        <button className="action">Register it</button> {/* Change button text here */}
      </div>
    </div>
  );
};

export default EventCard;
