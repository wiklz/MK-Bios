import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from './components/Intro';
import Home from './components/Home';
import Error from './components/Error';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component ={Intro} exact/>
                <Route path="/home" component ={Home}/>
                <Route component={Error}/>
            </Switch>

        </BrowserRouter>
    );
  }
}

export default App;
