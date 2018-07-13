import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <div className="filters">
                  <button>Filters <span className="caret"></span></button>
              </div>
              <div className="about">
                  <button><span className="about-icon"></span> About</button>
              </div>
          </header>
      </div>
    );
  }
}

export default App;
