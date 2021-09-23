import React, { useState } from 'react';
import '../stylesheets/quote.css';
import quotes from './quotesArray';

const Quote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const handleQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[quoteIndex]);
  };

  return (
    <div className="quote-container">
      <button type="button" onClick={handleQuote}>Generate Quote</button>
      <h2>{quote}</h2>
    </div>
  );
};

export default Quote;
