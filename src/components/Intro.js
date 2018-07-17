import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Intro extends Component {
    render() {
        return (
            <div className="App">
                <NavLink to="/home">
                    <button className="start-btn">START</button>
                </NavLink>
            </div>
        );
    }
}
export default Intro;