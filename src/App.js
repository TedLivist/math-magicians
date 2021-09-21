import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import Quote from './pages/quote';
import Navbar from './components/navbar';
import Home from './pages/home';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
