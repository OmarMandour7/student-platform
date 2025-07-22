import React from "react";

const NewsTicker = ({ newsItems }) => {
  return (
    <div className="news-ticker">
      <div className="ticker-content">
        {newsItems.map((item, index) => (
          <span className="ticker-item" key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
