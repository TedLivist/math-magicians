import '../stylesheets/calculator.css';
import React from 'react';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <input className="input-box" placeholder="0" />
        <div className="sub-container">
          <button type="button" className="ac button-width left-button">AC</button>
          <button type="button" className="plus-minus button-width left-button">+/-</button>
          <button type="button" className="percent button-width left-button">%</button>
          <button type="button" className="divide button-width right-button">&divide;</button>
        </div>
        <div className="sub-container">
          <button type="button" className="seven button-width left-button">7</button>
          <button type="button" className="eight button-width left-button">8</button>
          <button type="button" className="nine button-width left-button">9</button>
          <button type="button" className="times button-width right-button">x</button>
        </div>
        <div className="sub-container">
          <button type="button" className="four button-width left-button">4</button>
          <button type="button" className="five button-width left-button">5</button>
          <button type="button" className="six button-width left-button">6</button>
          <button type="button" className="minus button-width right-button">-</button>
        </div>
        <div className="last-container">
          <button type="button" id="zero-button" className="zero left-button">0</button>
          <button type="button" className="dot button-width left-button">.</button>
          <button type="button" className="equal button-width right-button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
