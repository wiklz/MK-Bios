import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Cards from './../components/Cards';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="filters">
                        <button>Filters <span className="caret"></span></button>
                    </div>
                    <div className="about">
                        <NavLink to="/">
                            <button><span className="about-icon"></span> About</button>
                        </NavLink>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">By faction</NavLink></li>
                            <li><NavLink to="/">A - Z</NavLink></li>
                            <li><NavLink to="/">Male</NavLink></li>
                            <li><NavLink to="/">Female</NavLink></li>
                            <li><NavLink to="/">DLC</NavLink></li>
                        </ul>
                    </div>
                </header>
                <Cards/>
                <footer className="App-footer">
                    <a target="_blank" href="https://github.com/wiklz" rel="noopener noreferrer" className="github"><span className="github-icon"></span>Github</a>
                </footer>
            </div>
        );
    }
}
export default Home;