import React from 'react';
import Image from './assets/clouds.jpg';

class Game extends React.Component {

    render() {
        return (
            <div className="game-container">
                <div className="main-top">
                    <img className="mainImage" src={Image} alt="cloud"></img>
                </div>
                <div className="main-middle">
                    <div>
                        This is where the Game will appear.
                    </div>
                </div>
                <div className="main-bottom">
                    <div>
                        This is where the Game will appear.
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;