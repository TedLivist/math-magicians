/* eslint-disable  no-console, react/no-unused-state */
/* eslint-disable react/prop-types, class-methods-use-this */

import '../stylesheets/calculator.css';
import React from 'react';
// import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const inputEl = document.querySelector('input');

    if ((next != null)) {
      inputEl.value = next;
    } else if (!Number.isNaN(total)) {
      inputEl.value = total;
    }
  }

  handleClick(e) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  }

  render() {
    return (
      <div className="container">
        <input className="input-box" placeholder="0" />
        <div className="sub-container">
          <button type="button" className="ac button-width left-button" onClick={this.handleClick}>AC</button>
          <button type="button" className="plus-minus button-width left-button" onClick={this.handleClick}>+/-</button>
          <button type="button" className="percent button-width left-button" onClick={this.handleClick}>%</button>
          <button type="button" className="divide button-width right-button" onClick={this.handleClick}>&divide;</button>
        </div>
        <div className="sub-container">
          <button type="button" className="seven button-width left-button" onClick={this.handleClick}>7</button>
          <button type="button" className="eight button-width left-button" onClick={this.handleClick}>8</button>
          <button type="button" className="nine button-width left-button" onClick={this.handleClick}>9</button>
          <button type="button" className="times button-width right-button" onClick={this.handleClick}>x</button>
        </div>
        <div className="sub-container">
          <button type="button" className="four button-width left-button" onClick={this.handleClick}>4</button>
          <button type="button" className="five button-width left-button" onClick={this.handleClick}>5</button>
          <button type="button" className="six button-width left-button" onClick={this.handleClick}>6</button>
          <button type="button" className="minus button-width right-button" onClick={this.handleClick}>-</button>
        </div>
        <div className="sub-container">
          <button type="button" className="four button-width left-button" onClick={this.handleClick}>1</button>
          <button type="button" className="five button-width left-button" onClick={this.handleClick}>2</button>
          <button type="button" className="six button-width left-button" onClick={this.handleClick}>3</button>
          <button type="button" className="minus button-width right-button" onClick={this.handleClick}>+</button>
        </div>
        <div className="last-container">
          <button type="button" id="zero-button" className="zero left-button" onClick={this.handleClick}>0</button>
          <button type="button" className="dot button-width left-button" onClick={this.handleClick}>.</button>
          <button type="button" className="equal button-width right-button" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

// Calculator.propTypes = {
//   handleClick: PropTypes.func.isRequired,
// };

export default Calculator;
