/* eslint-disable  */

// import '../stylesheets/calculator.css';
// import React from 'react';
// import calculate from '../logic/calculate';

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//       next: 0,
//       operation: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidUpdate() {
//     const { total, next } = this.state;
//     const inputEl = document.querySelector('input');

//     if ((next != null)) {
//       inputEl.value = next;
//     } else if (!Number.isNaN(total)) {
//       inputEl.value = total;
//     }
//   }

//   handleClick(e) {
//     const { total, next, operation } = this.state;
//     this.setState(calculate({ total, next, operation }, e.target.innerHTML));
//   }

//   render() {
//     return (
//       <div className="container">
//         <input className="input-box" placeholder="0" readOnly />
//         <div className="sub-container">
//           <button type="button" className="ac button-width left-button" onClick={this.handleClick}>AC</button>
//           <button type="button" className="plus-minus button-width left-button" onClick={this.handleClick}>+/-</button>
//           <button type="button" className="percent button-width left-button" onClick={this.handleClick}>%</button>
//           <button type="button" className="divide button-width right-button" onClick={this.handleClick}>&divide;</button>
//         </div>
//         <div className="sub-container">
//           <button type="button" className="seven button-width left-button" onClick={this.handleClick}>7</button>
//           <button type="button" className="eight button-width left-button" onClick={this.handleClick}>8</button>
//           <button type="button" className="nine button-width left-button" onClick={this.handleClick}>9</button>
//           <button type="button" className="times button-width right-button" onClick={this.handleClick}>x</button>
//         </div>
//         <div className="sub-container">
//           <button type="button" className="four button-width left-button" onClick={this.handleClick}>4</button>
//           <button type="button" className="five button-width left-button" onClick={this.handleClick}>5</button>
//           <button type="button" className="six button-width left-button" onClick={this.handleClick}>6</button>
//           <button type="button" className="minus button-width right-button" onClick={this.handleClick}>-</button>
//         </div>
//         <div className="sub-container">
//           <button type="button" className="four button-width left-button" onClick={this.handleClick}>1</button>
//           <button type="button" className="five button-width left-button" onClick={this.handleClick}>2</button>
//           <button type="button" className="six button-width left-button" onClick={this.handleClick}>3</button>
//           <button type="button" className="minus button-width right-button" onClick={this.handleClick}>+</button>
//         </div>
//         <div className="last-container">
//           <button type="button" id="zero-button" className="zero left-button" onClick={this.handleClick}>0</button>
//           <button type="button" className="dot button-width left-button" onClick={this.handleClick}>.</button>
//           <button type="button" className="equal button-width right-button" onClick={this.handleClick}>=</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Calculator;

import '../stylesheets/calculator.css';
import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     total: 0,
  //     next: 0,
  //     operation: '',
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // componentDidUpdate() {
  //   const { total, next } = this.state;
  //   const inputEl = document.querySelector('input');

  //   if ((next != null)) {
  //     inputEl.value = next;
  //   } else if (!Number.isNaN(total)) {
  //     inputEl.value = total;
  //   }
  // }

  // handleClick(e) {
  //   const { total, next, operation } = this.state;
  //   this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  // }

  const [ state, setState ] = useState({total: 0, next: 0, operation: ''})

  const handleClick = (e) => {
    console.log(state)
  }
  
  return (
    <div className="container">
      <input className="input-box" placeholder="0" readOnly />
      <div className="sub-container">
        <button type="button" className="ac button-width left-button" onClick={handleClick}>AC</button>
        <button type="button" className="plus-minus button-width left-button" onClick={handleClick}>+/-</button>
        <button type="button" className="percent button-width left-button" onClick={handleClick}>%</button>
        <button type="button" className="divide button-width right-button" onClick={handleClick}>&divide;</button>
      </div>
      <div className="sub-container">
        <button type="button" className="seven button-width left-button" onClick={handleClick}>7</button>
        <button type="button" className="eight button-width left-button" onClick={handleClick}>8</button>
        <button type="button" className="nine button-width left-button" onClick={handleClick}>9</button>
        <button type="button" className="times button-width right-button" onClick={handleClick}>x</button>
      </div>
      <div className="sub-container">
        <button type="button" className="four button-width left-button" onClick={handleClick}>4</button>
        <button type="button" className="five button-width left-button" onClick={handleClick}>5</button>
        <button type="button" className="six button-width left-button" onClick={handleClick}>6</button>
        <button type="button" className="minus button-width right-button" onClick={handleClick}>-</button>
      </div>
      <div className="sub-container">
        <button type="button" className="four button-width left-button" onClick={handleClick}>1</button>
        <button type="button" className="five button-width left-button" onClick={handleClick}>2</button>
        <button type="button" className="six button-width left-button" onClick={handleClick}>3</button>
        <button type="button" className="minus button-width right-button" onClick={handleClick}>+</button>
      </div>
      <div className="last-container">
        <button type="button" id="zero-button" className="zero left-button" onClick={handleClick}>0</button>
        <button type="button" className="dot button-width left-button" onClick={handleClick}>.</button>
        <button type="button" className="equal button-width right-button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}
 
export default Calculator;