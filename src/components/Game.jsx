import React from 'react';
import './Game.css';
import Image from './assets/clouds.jpg';

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lineA: '',
            LineB: '',
            LineC: '',
            LineD: '',
            textNumber: 0
        }

        this.changeText = this.changeText.bind(this);
    }

    componentWillMount() {
        this.changeText();
    }

    changeText() {
        let lineArr = ['You walk towards a decrepit looking house.', 'Lydia:', 'Lydia:'];
        let lineBrr = ['????:', 'Gwendolyn, I am never wrong. Do you have the necklace?', 'Good, I am going home…'];
        let lineCrr = ['Is this really a good idea, Grandma Lydia?', 'Gwen:', 'Gwen:'];
        let lineDrr = ['', 'Yes, I do.  It’s hard to forget a 5-pound metal chain with a huge cross attached to it.', "Wait, are you not going in with me? Lydia is nowhere to be found…"];

        let textIndex = this.state.textNumber;
        let newIndex = textIndex + 1;

        this.setState({
            lineA: lineArr[textIndex],
            lineB: lineBrr[textIndex],
            lineC: lineCrr[textIndex],
            lineD: lineDrr[textIndex],
            textNumber: newIndex
        })

    }

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
                            {this.state.lineA}
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            {this.state.lineB}
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            {this.state.lineC}
                        </div>
                        <br />
                        <div className="mainTextMiddle">
                            {this.state.lineD}
                        </div>
                        <br />
                        <button id="textButton" onClick={() => this.changeText()}>Next</button>
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