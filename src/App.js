import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import ToDo from './Containers/ToDo/ToDo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ToDo />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
