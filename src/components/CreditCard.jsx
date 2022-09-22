import React from 'react';
import visa from '../assets/images/visa.png';
// import master from '../assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color }}>
      {type === 'Visa' ? (
        <img src={visa} alt={type} />
      ) : (
        <img src={`../assets/images/master-card.svg`} alt={type} />
      )}
      <h1>**** **** **** {number.substring(12)}</h1>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
