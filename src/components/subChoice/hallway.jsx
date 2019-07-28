import React from 'react';
import ReactDOM from 'react-dom';
import './sub-choice-css/Hallway.css';
import Choice from '../Choice';
import TopHallway from './TopHallway';
import { firstLocationImages } from '../assets/firstLocation/firstLocation';

class Hallway extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            hallwayDisplay: 'initial',
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
        this.enterFrontYard = this.enterFrontYard.bind(this);
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

    enterFrontYard() {
        this.setState({
            hallwayDisplay: 'none'
        })

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<Choice
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.updateLocation}
        />, document.getElementById('location-change'));

        console.log(this.props.choice);

        this.props.data.frontYardDisplay = "initial";

        let frontYard = {
            floorNumber: firstLocationImages[1].floor,
            floor: firstLocationImages[1].location,
            locationImage: firstLocationImages[1].url,
        }

        console.log(this.props);

        this.props.updateLocation(frontYard);
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

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<TopHallway
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.updateLocation}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.updateLocation(topHallway);
    }

    render() {
        console.log(firstLocationImages);
        return (
            <React.Fragment>
                <div className="choice" style={{ display: this.state.hallwayDisplay }}>
                    <div className='choice-title'>What do you do?</div>
                    <div className="choice-button-container">
                        <button onClick={this.enterTopHallway} className="choice-button">
                            Go to Second Floor
                        </button>
                        <button onClick={this.enterFrontYard} className="choice-button">
                            Go to Front Yard
                        </button>
                    </div>
                    {/* <div className="choice-text-container">
                        <div className="choice-text">
                            {this.state.text}
                        </div>
                    </div> */}
                    <div id="location-change" />
                </div>
            </React.Fragment>
        )
    }
}

export default Hallway;