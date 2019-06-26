import React from 'react';
import './css/Game.css';
import MainMenu from './MainMenu';
import Choice from './Choice';
import Image from './assets/clouds.jpg';
import { firstLocationImages } from './assets/firstLocation/firstLocation';
import { playerPortraits } from './assets/playerPortraits/playerPortraits';


class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lineA: '',
            lineB: '',
            lineC: '',
            lineD: '',
            displayMenu: 'none',
            displayGame: 'initial',
            choiceMenu: 'none',
            textMenu: 'initial',
            textNumber: 0,
            location: 'House',
            floorNumber: '1st',
            floor: 'Front Yard',
            playerLevelA: 1,
            playerHitPointsA: 30,
            playerSpecialPointsA: 10,
            playerTerrorPointsA: 0,
            playerLevelB: 0,
            playerHitPointsB: 0,
            playerSpecialPointsB: 0,
            playerTerrorPointsB: 0,
            playerLevelC: 0,
            playerHitPointsC: 0,
            playerSpecialPointsC: 0,
            playerTerrorPointsC: 0,
            playerLevelD: 0,
            playerHitPointsD: 0,
            playerSpecialPointsD: 0,
            playerTerrorPointsD: 0,
        }

        this.changeText = this.changeText.bind(this);
        this.openMainMenu = this.openMainMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.updateStats = this.updateStats.bind(this);
    }

    componentDidMount() {
        this.changeText();
    }

    changeText() {
        let lineArr = [
            'You walk towards a decrepit looking house.',
            'Lydia:',
            'Lydia:',
            'Gwen:',
        ];
        let lineBrr = [
            '????: Is this really a good idea, Grandma Lydia?',
            'Gwendolyn, I am never wrong. Do you have the necklace?',
            'Good, I am going home…',
            'I hate it when she does that!!!',
        ];
        let lineCrr = [
            '',
            'Gwen:',
            'Gwen:',
            '(releases a huge sigh)',
        ];
        let lineDrr = [
            '',
            'Yes, I do. It’s hard to forget a heavy chain with a huge cross attached to it.',
            "Wait, are you not going in with me? ...Lydia is nowhere to be found…",
            'Okay, I need to figure out what is messed up with this house.',
        ];

        let textIndex = this.state.textNumber;
        let newIndex = textIndex + 1;

        this.setState({
            lineA: lineArr[textIndex],
            lineB: lineBrr[textIndex],
            lineC: lineCrr[textIndex],
            lineD: lineDrr[textIndex],
            textNumber: newIndex
        })

        console.log(this.state.textNumber);

        if (this.state.textNumber === 4) {
            this.setState({
                choiceMenu: 'initial',
                textMenu: 'none',
            })
        }

    }

    openMainMenu() {
        this.setState({
            displayMenu: 'initial',
            displayGame: 'none'
        })
    }

    closeMenu() {
        this.setState({
            displayMenu: 'none',
            displayGame: 'initial'
        })
    }

    updateStats(childNumber) {
        // console.log('childNumber: ' + childNumber);
        // console.dir(childNumber);

        if (childNumber.playerHitPointsA <= 0) {
            childNumber.playerHitPointsA = 0;
            alert('HP is at 0. Game Over...')
        }

        if (childNumber.playerTerrorPointsA >= 100) {
            childNumber.playerTerrorPointsA = 100;
        }

        this.setState({
            playerLevelA: childNumber.playerLevelA,
            playerHitPointsA: childNumber.playerHitPointsA,
            playerSpecialPointsA: childNumber.playerSpecialPointsA,
            playerTerrorPointsA: childNumber.playerTerrorPointsA
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.displayMenu }} className="main-menu">
                    <MainMenu
                        data={this.state}
                        close={this.closeMenu}
                        statUpdate={this.updateStats} />
                </div>
                <div style={{ display: this.state.displayGame }} className="game-container">
                    <div className="main-top">
                        <div className="mainTopDiv">
                            <img className="mainImage" src={firstLocationImages[0].url} alt="location"></img>
                            <div className="mainMenuDiv">
                                <div id="mainMenuContainer">
                                    <div className="mainLocation">
                                        Location: {this.state.location}
                                    </div>
                                    <br />
                                    <div className="mainFloor">
                                        {this.state.floorNumber} Floor: {this.state.floor}
                                    </div>
                                    <br />
                                    <button className="mainMenuButton" onClick={this.openMainMenu}>
                                        Main Menu
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-middle">
                        <div style={{ display: this.state.textMenu }} className="mainTextMiddle-container">
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
                        <div style={{ display: this.state.choiceMenu }} className="choice-container">
                            <Choice
                                data={this.state}
                                statUpdate={this.updateStats}
                            />
                        </div>
                    </div>
                    <div className="main-bottom">
                        <div className="party mainParty1">
                            <div className="playerInfo-container">
                                <div className="playerInfo">
                                    LV: {this.state.playerLevelA}
                                </div>
                                <div className="playerInfo">
                                    HP: {this.state.playerHitPointsA}
                                </div>
                                <div className="playerInfo">
                                    SP: {this.state.playerSpecialPointsA}
                                </div>
                                <div className="playerInfo">
                                    TP: {this.state.playerTerrorPointsA}
                                </div>
                            </div>
                            <img id="playerImage" src={playerPortraits[0].url} alt="player" ></img>
                        </div>
                        <div className="party mainParty2">
                            <div className="playerInfo-container">
                                <div className="playerInfo">
                                    LV: {this.state.playerLevelB}
                                </div>
                                <div className="playerInfo">
                                    HP: {this.state.playerHitPointsB}
                                </div>
                                <div className="playerInfo">
                                    SP: {this.state.playerSpecialPointsB}
                                </div>
                                <div className="playerInfo">
                                    TP: {this.state.playerTerrorPointsB}
                                </div>
                            </div>
                            <img id="playerImage" src={Image} alt="cloud" ></img>
                        </div>
                        <div className="party mainParty3">
                            <div className="playerInfo-container">
                                <div className="playerInfo">
                                    LV: {this.state.playerLevelC}
                                </div>
                                <div className="playerInfo">
                                    HP: {this.state.playerHitPointsC}
                                </div>
                                <div className="playerInfo">
                                    SP: {this.state.playerSpecialPointsC}
                                </div>
                                <div className="playerInfo">
                                    TP: {this.state.playerTerrorPointsC}
                                </div>
                            </div>
                            <img id="playerImage" src={Image} alt="cloud" ></img>
                        </div>
                        <div className="party mainParty4">
                            <div className="playerInfo-container">
                                <div className="playerInfo">
                                    LV: {this.state.playerLevelD}
                                </div>
                                <div className="playerInfo">
                                    HP: {this.state.playerHitPointsD}
                                </div>
                                <div className="playerInfo">
                                    SP: {this.state.playerSpecialPointsD}
                                </div>
                                <div className="playerInfo">
                                    TP: {this.state.playerTerrorPointsD}
                                </div>
                            </div>
                            <img id="playerImage" src={Image} alt="cloud" ></img>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Game;