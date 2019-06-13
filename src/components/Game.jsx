import React from 'react';
import './Game.css';
import Image from './assets/clouds.jpg';

class Game extends React.Component {

    render() {
        return (
            <div className="game-container">
                <div className="main-top">
                    <img className="mainImage" src={Image} alt="cloud" width={1100}></img>
                </div>
                <div className="main-middle">
                    <div className="mainMiddleLeft">
                        <div className="mainTextMiddleLeft">
                            This is where the Game will appear.
                        </div>
                        <div className="mainTextMiddleLeft">
                            This is where the Game will appear.
                        </div>
                        <div className="mainTextMiddleLeft">
                            This is where the Game will appear.
                        </div>
                    </div>
                    <div className="mainMiddleRight">
                        <div className="mainLocationMiddleRight">
                            House - Front Yard
                        </div>
                        <button className="mainMenuMiddleRight">
                            Menu
                        </button>
                    </div>
                </div>
                <div className="main-bottom">
                    <img src={Image} width={200} height={200} alt="cloud" ></img>
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