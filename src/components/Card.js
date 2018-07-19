import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {char} = this.props;
        const backgroundFront = {
            background: "url(" + char.images[0] +") no-repeat center",
            // backgroundSize: "105%"
        };
        const backgroundBack = {
            background: "black url(" + char.images[1] +") no-repeat center top",
            backgroundSize: "100%"
        };
        return (
            <div className="container">
                <div className="flipper">
                    <div className="front" style={backgroundFront}>
                        <div className="name-wrapper">
                            <h1 className="name">{char.name}</h1>
                        </div>
                    </div>
                    <div className="back" style={backgroundBack}>
                        <div className="history-wrapper">
                            <p className="history">{char.history}</p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Card;