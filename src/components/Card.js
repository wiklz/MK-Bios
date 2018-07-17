import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {char} = this.props;
        return (
            <div className="front">
                <div className="name-wrapper">
                    <h1 className="name">{char.name}</h1>
                </div>
            </div>

        );
    }
}

export default Card;