import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Cards from './../components/Cards';
import Characters from "../Characters";


class Home extends Component {
    state = {
      menuOpen: false
    };

    render() {
        const menuFilter = this.state.menuOpen &&
            <div className="menu">
                <ul>
                    <li><NavLink to="/">By faction</NavLink></li>
                    <li><NavLink to="/">A - Z</NavLink></li>
                    <li><NavLink to="/">Male</NavLink></li>
                    <li><NavLink to="/">Female</NavLink></li>
                    <li><NavLink to="/">DLC</NavLink></li>
                </ul>
            </div>;
        return (
            <div className="App">
                <header className="App-header">
                    <div className="filters">
                        <button onClick={this.openFilters}>Filters <span className="caret"></span></button>
                    </div>
                    <div className="about">
                        <NavLink to="/">
                            <button><span className="about-icon"></span> About</button>
                        </NavLink>
                    </div>
                    {menuFilter}
                </header>
                <Cards chars={Characters}/>
                <footer className="App-footer">
                    <a target="_blank" href="https://github.com/wiklz" rel="noopener noreferrer" className="github"><span className="github-icon"></span>Github</a>
                </footer>
            </div>
        );
    }
    openFilters = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
}

export default Home;