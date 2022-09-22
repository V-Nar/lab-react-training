import './IdCard.css';
import React from 'react';

const IdCard = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.lastName} className="idCard">
          <img src={card.picture} alt="portrait" />
          <div className="infos">
            <p>
              <strong>First name:</strong> {card.firstName}
            </p>
            <p>
              <strong>Last name:</strong> {card.lastName}
            </p>
            <p>
              <strong>Gender:</strong> {card.gender}
            </p>
            <p>
              <strong>Height:</strong> {card.height}m
            </p>
            <p>
              <strong>Birth:</strong> {card.birth.toString()}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default IdCard;
