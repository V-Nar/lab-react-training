import React from 'react';

const BoxColor = ({ r, g, b }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        backgroundColor: `rgb(${r},${g},${b})`,
        margin: '8px',
      }}
    >
      <p>
        rgb{'('}
        {r},{g},{b}
        {')'}
      </p>
    </div>
  );
};

export default BoxColor;
