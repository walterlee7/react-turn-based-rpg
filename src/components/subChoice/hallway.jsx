import React from 'react';
import './sub-choice-css/Hallway.css';
import { firstLocationImages } from '../assets/firstLocation/firstLocation';

class Hallway extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            frontYardDisplay: 'initial',
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
        }

        this.enterTopHallway = this.enterTopHallway.bind(this);
        this.checkMysteriousFlower = this.checkMysteriousFlower.bind(this);
        this.checkMailbox = this.checkMailbox.bind(this);
        this.leaveArea = this.leaveArea.bind(this);
    }

    componentDidMount() {
        this.choiceUpdate();
    }

    choiceUpdate() {
        console.log('update');

        this.setState({
            player1: {
                playerLevelA: this.props.data.player1.playerLevelA,
                playerExperienceA: this.props.data.player1.playerExperienceA,
                playerToLevelA: this.props.data.player1.playerToLevelA,
                playerHitPointsA: this.props.data.player1.playerHitPointsA,
                playerMaxHitPointsA: this.props.data.player1.playerMaxHitPointsA,
                playerSpecialPointsA: this.props.data.player1.playerSpecialPointsA,
                playerMaxSpecialPointsA: this.props.data.player1.playerMaxSpecialPointsA,
                playerTerrorPointsA: this.props.data.player1.playerTerrorPointsA,
                playerMaxTerrorPointsA: this.props.data.player1.playerMaxTerrorPointsA,
                playerStrengthA: this.props.data.player1.playerStrengthA,
                playerConstitutionA: this.props.data.player1.playerConstitutionA,
                playerIntelligenceA: this.props.data.player1.playerIntelligenceA,
                playerSpiritA: this.props.data.player1.playerSpiritA,
                playerAttackPowerA: this.props.data.player1.playerAttackPowerA,
                playerMagicPowerA: this.props.data.player1.playerMagicPowerA,
                playerPhysicalDefenseA: this.props.data.player1.playerPhysicalDefenseA,
                playerMagicDefenseA: this.props.data.player1.playerPhysicalDefenseA,
            }
        })
    }

    enterTopHallway() {
        this.setState({
            frontYardDisplay: 'none'
        })

        let topHallway = {
            floorNumber: firstLocationImages[8].floor,
            floor: firstLocationImages[8].location,
            locationImage: firstLocationImages[8].url,
        }

        console.log(this.props);

        this.props.updateLocation(topHallway);
    }

    checkMysteriousFlower() {
        this.choiceUpdate();
        // console.log(this.state.player1);
        // console.dir(this.state.player1);

        this.setState({
            text: <p>The mysterious flower releases a spirit shock when you try to touch it, you receive <strong className="damage-text"> -5 damage and +5 terror</strong>.</p>
        })

        let flowerDamage = this.props.data.player1.playerHitPointsA - 5;
        let flowerTerror = this.props.data.player1.playerTerrorPointsA + 5;

        this.props.data.player1.playerHitPointsA = flowerDamage;
        this.props.data.player1.playerTerrorPointsA = flowerTerror;

        // console.log('player: ' + this.state.player1);

        this.props.statUpdate(this.props.data.player1);
    }

    checkMailbox() {
        this.setState({
            text: <p>You check the mailbox and find <strong className='loot-text'>+100 Essence</strong>.</p>,
        })

        let essenceUpdate = this.props.data.essence + 100;

        this.props.essenceUpdate(essenceUpdate);
    }

    leaveArea() {
        this.setState({
            text: 'Not an Option...'
        })
    }

    render() {
        console.log(firstLocationImages);
        return (
            <React.Fragment>
                <div className="choice" style={{ display: this.state.frontYardDisplay }}>
                    <div className='choice-title'>What do you do?</div>
                    <div className="choice-button-container">
                        <button onClick={this.enterTopHallway} className="choice-button">
                            Go to Second Floor
                        </button>
                        {/* <button onClick={this.checkMysteriousFlower} className="choice-button">
                            Check Mysterious Flower
                        </button>
                        <button onClick={this.checkMailbox} className="choice-button">
                            Check Mailbox
                        </button>
                        <button onClick={this.leaveArea} className="choice-button">
                            Leave Area
                        </button> */}
                    </div>
                    {/* <div className="choice-text-container">
                        <div className="choice-text">
                            {this.state.text}
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Hallway;