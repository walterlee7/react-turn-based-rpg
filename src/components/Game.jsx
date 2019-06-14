import React from 'react';
import './Game.css';
import Image from './assets/clouds.jpg';

class Game extends React.Component {

    render() {
        return (
            <div className="game-container">
                <div className="main-top">
                    <div className="mainTopDiv">
                        <img className="mainImage" src={Image} alt="cloud"></img>
                        <div className="mainMenuDiv">
                            <div>
                                <div className="mainLocation">
                                    Location: House
                                </div>
                                <button className="mainMenuButton">
                                    Menu
                                </button>
                            </div>
                        </div>
                    </div>

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
                        <div className="mainTextMiddleLeft">
                            This is where the Game will appear.
                        </div>
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="mainParty">
                        <img src={Image} width={150} height={150} alt="cloud" ></img>
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
                    <div className="mainParty">
                        <img src={Image} width={150} height={150} alt="cloud" ></img>
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
                    <div className="mainParty">
                        <img src={Image} width={150} height={150} alt="cloud" ></img>
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
                    <div className="mainParty">
                        <img src={Image} width={150} height={150} alt="cloud" ></img>
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
            </div>
        );
    }
}

export default Game;