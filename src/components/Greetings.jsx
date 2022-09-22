import React from 'react';
import './Greeting.css';

const Greeting = ({ lang, children }) => {
  const getLang = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hi';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hola';
    }
  };
  return (
    <div className="greeting">
      <p>
        {getLang(lang)} {children}
      </p>
    </div>
  );
};

export default Greeting;
