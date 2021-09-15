/* eslint-disable class-methods-use-this */

import React from 'react';
import Calculator from './components/calculator';
import './App.css';
// import operate from './logic/operate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
