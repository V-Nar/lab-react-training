import React from 'react';
import './Random.css';

const Random = ({ min, max }) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return (
    <>
      <p className="Random">
        Random value between {min} and {max} ={'>'} {random}
      </p>
    </>
  );
};

export default Random;
