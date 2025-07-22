import React from 'react'

const GroupCard = ({ fontColor, Char }) => {
  return (
    <div className="group-button" style={{ '--group-color': fontColor }}>
      <div className="card-body py-4">
        <h3 className="card-title fw-bold">Group {Char}</h3>
      </div>
    </div>
  );
};

export default GroupCard;
