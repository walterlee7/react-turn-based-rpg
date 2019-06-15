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
                            <div id="mainMenuContainer">
                                <div className="mainLocation">
                                    Location: House
                                </div>
                                <br />
                                <div className="mainFloor">
                                    Floor: Front Yard
                                </div>
                                <br />
                                <button className="mainMenuButton">
                                    Main Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-middle">
                    <div className="mainTextMiddle-container">
                        <div className="mainTextMiddle">
                            This is where the text will appear.
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            This is where the text will appear.
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            This is where the text will appear.
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            This is where the text will appear.
                        </div>
                        <br />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="party mainParty1">
                        <div className="playerInfo-container">
                            <div className="playerInfo">
                                Lv: 100
                                </div>
                            <div className="playerInfo">
                                HP: 999
                                </div>
                            <div className="playerInfo">
                                SP: 100
                                </div>
                            <div className="playerInfo">
                                VP: 100
                                </div>
                        </div>
                        <img id="playerImage" src={Image} alt="cloud" ></img>
                    </div>
                    <div className="party mainParty2">
                        <div className="playerInfo-container">
                            <div className="playerInfo">
                                Lv: 100
                                </div>
                            <div className="playerInfo">
                                HP: 999
                                </div>
                            <div className="playerInfo">
                                SP: 100
                                </div>
                            <div className="playerInfo">
                                VP: 100
                                </div>
                        </div>
                        <img id="playerImage" src={Image} alt="cloud" ></img>
                    </div>
                    <div className="party mainParty3">
                        <div className="playerInfo-container">
                            <div className="playerInfo">
                                Lv: 100
                                </div>
                            <div className="playerInfo">
                                HP: 999
                                </div>
                            <div className="playerInfo">
                                SP: 100
                                </div>
                            <div className="playerInfo">
                                VP: 100
                                </div>
                        </div>
                        <img id="playerImage" src={Image} alt="cloud" ></img>
                    </div>
                    <div className="party mainParty4">
                        <div className="playerInfo-container">
                            <div className="playerInfo">
                                Lv: 100
                                </div>
                            <div className="playerInfo">
                                HP: 999
                                </div>
                            <div className="playerInfo">
                                SP: 100
                                </div>
                            <div className="playerInfo">
                                VP: 100
                                </div>
                        </div>
                        <img id="playerImage" src={Image} alt="cloud" ></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;