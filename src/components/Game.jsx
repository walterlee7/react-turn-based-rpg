import React from 'react';
import './Game.css';
import Image from './assets/clouds.jpg';

class Game extends React.Component {

    render() {
        return (
            <div className="game-container">
                <div className="main-top">
                    <img className="mainImage" src={Image} alt="cloud" width={1200}></img>
                </div>
                <div className="main-middle">
                    <div className="mainMiddleLeft">
                        <div>
                            This is where the Game will appear.
                        </div>
                        <div>
                            This is where the Game will appear.
                        </div>
                    </div>
                    <div className="mainMiddleRight">
                        <div>
                            location
                        </div>
                        <button>
                            Menu
                        </button>
                    </div>
                </div>
                <div className="main-bottom">
                    <img src={Image} width={400} alt="cloud" ></img>
                    <div>
                        This is where the Game will appear.
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;