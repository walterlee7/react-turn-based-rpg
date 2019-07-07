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
            location: firstLocationImages[0].level,
            floorNumber: firstLocationImages[1].floor,
            floor: firstLocationImages[1].location,
            locationImage: firstLocationImages[1].url,
            essence: 0,
            lowHealth: 'black',
            lowHealthBlink: 'health-text',
            items: [
                {
                    id: 'First Aid',
                    itemNumber: 5,
                    itemDescription: 'First Aid: heals for 30% HP.',
                },
                {
                    id: 'Water',
                    itemNumber: 3,
                    itemDescription: 'Water: restores for 30% SP.',
                },
            ],
            player1: {
                playerLevelA: 1,
                playerExperienceA: 0,
                playerToLevelA: 50,
                playerHitPointsA: 30,
                playerMaxHitPointsA: 30,
                playerSpecialPointsA: 10,
                playerMaxSpecialPointsA: 10,
                playerTerrorPointsA: 0,
                playerMaxTerrorPointsA: 100,
                playerStrengthA: 1,
                playerConstitutionA: 2,
                playerIntelligenceA: 5,
                playerSpiritA: 5,
                playerAttackPowerA: 1,
                playerMagicPowerA: 5,
                playerPhysicalDefenseA: 1,
                playerMagicDefenseA: 5,
            },
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
        this.updateEssence = this.updateEssence.bind(this);
        this.updateItems = this.updateItems.bind(this);
    }

    componentDidMount() {
        this.changeText(0);
    }

    changeText(num) {
        switch (num) {
            case 0:
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

                console.log('text number: ' + this.state.textNumber);

                if (this.state.textNumber === 4) {
                    this.setState({
                        choiceMenu: 'initial',
                        textMenu: 'none',
                    })
                }
                break;
            case 1:
                this.setState({
                    choiceMenu: 'initial',
                    textMenu: 'none',
                })
                break;
            default:
                console.log('hello');
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

    updateItems(childItem) {
        //console.log(childItem);
        childItem.map(item => {
            //console.log(item);
            this.setState({
                id: item.id,
                itemNumber: item.itemNumber,
                itemDescription: item.itemDescription,
            })
            return null;
        })
    }

    updateStats(childNum) {
        // console.log('childNumber: ' + childNumber);
        //console.dir(childNum);

        if (childNum.playerHitPointsA <= 0) {
            childNum.playerHitPointsA = 0;
            alert('HP is at 0. Game Over...')
        }

        let healthLow = childNum.playerMaxHitPointsA * 0.3;
        if (childNum.playerHitPointsA <= healthLow) {
            this.setState({
                lowHealth: 'red',
                lowHealthBlink: 'blinking',
            })
        } else {
            this.setState({
                lowHealth: 'black',
                lowHealthBlink: 'health-text',
            })
        }

        if (childNum.playerTerrorPointsA >= 100) {
            childNum.playerTerrorPointsA = 100;
        }

        this.setState({
            player1: {
                playerLevelA: childNum.playerLevelA,
                playerExperienceA: childNum.playerExperienceA,
                playerToLevelA: childNum.playerToLevelA,
                playerHitPointsA: childNum.playerHitPointsA,
                playerMaxHitPointsA: childNum.playerMaxHitPointsA,
                playerSpecialPointsA: childNum.playerSpecialPointsA,
                playerMaxSpecialPointsA: childNum.playerMaxSpecialPointsA,
                playerTerrorPointsA: childNum.playerTerrorPointsA,
                playerMaxTerrorPointsA: childNum.playerMaxTerrorPointsA,
                playerStrengthA: childNum.playerStrengthA,
                playerConstitutionA: childNum.playerConstitutionA,
                playerIntelligenceA: childNum.playerIntelligenceA,
                playerSpiritA: childNum.playerSpiritA,
                playerAttackPowerA: childNum.playerAttackPowerA,
                playerMagicPowerA: childNum.playerMagicPowerA,
                playerPhysicalDefenseA: childNum.playerPhysicalDefenseA,
                playerMagicDefenseA: childNum.playerMagicDefenseA,
            }
        })
    }

    updateEssence(num) {
        this.setState({
            essence: this.state.essence + num,
        })

        console.log(this.state.essence);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.displayMenu }} className="main-menu">
                    <MainMenu
                        data={this.state}
                        close={this.closeMenu}
                        statUpdate={this.updateStats}
                        itemUpdate={this.updateItems}
                    />
                </div>
                <div style={{ display: this.state.displayGame }} className="game-container">
                    <div className="main-top">
                        <div className="mainTopDiv">
                            <img className="mainImage" src={this.state.locationImage} alt="location"></img>
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
                            <button id="textButton" onClick={() => this.changeText(0)}>Next</button>
                            <br />
                            <button id="skipTextButton" onClick={() => this.changeText(1)}>Skip</button>
                        </div>
                        <div style={{ display: this.state.choiceMenu }} className="choice-container">
                            <Choice
                                data={this.state}
                                statUpdate={this.updateStats}
                                essenceUpdate={this.updateEssence}
                            />
                        </div>
                    </div>
                    <div className="main-bottom">
                        <div className="party mainParty1">
                            <div className="playerInfo-container">
                                <div className="playerInfo">
                                    LV: {this.state.player1.playerLevelA}
                                </div>
                                <div className="playerInfo" style={{ color: this.state.lowHealth }}>
                                    <div className={this.state.lowHealthBlink}>HP:</div> {this.state.player1.playerHitPointsA}/{this.state.player1.playerMaxHitPointsA}
                                </div>
                                <div className="playerInfo">
                                    SP: {this.state.player1.playerSpecialPointsA}/{this.state.player1.playerMaxSpecialPointsA}
                                </div>
                                <div className="playerInfo">
                                    TP: {this.state.player1.playerTerrorPointsA}/{this.state.player1.playerMaxTerrorPointsA}
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