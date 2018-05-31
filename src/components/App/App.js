import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from '../header/header';
import Recipes from '../recipes/recipes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Recipes />
      </div>
    );
  }
}

export default App;
