import React from 'react';
import './Game.css';
import Image from './assets/clouds.jpg';

class Game extends React.Component {

    render() {
        return (
            <div className="game-container">
                <div className="main-top">
                    <img className="mainImage" src={Image} alt="cloud" width={1150}></img>
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
                    <img src={Image} width={250} height={250} alt="cloud" ></img>
                    <div className="playerInfo-container">
                        <div className="playerInfo">
                            Level: 1
                        </div>
                        <div className="playerInfo">
                            HP: 100
                        </div>
                        <div className="playerInfo">
                            SP: 10
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Game;