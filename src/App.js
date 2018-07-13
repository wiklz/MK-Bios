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
              <div className="menu">
                  <ul>
                      <li><a href="#">By faction</a></li>
                      <li><a href="#">A - Z</a></li>
                      <li><a href="#">Male</a></li>
                      <li><a href="#">Female</a></li>
                      <li><a href="#">DLC</a></li>
                  </ul>
              </div>
          </header>
      </div>
    );
  }
}

export default App;
