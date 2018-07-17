import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {char} = this.props;
        return (
            <div className="name-wrapper">
                <h1 className="name">{char.name}</h1>
            </div>
        );
    }
}

export default Card;