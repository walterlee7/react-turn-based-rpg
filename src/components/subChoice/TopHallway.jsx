import React from 'react';
import ReactDOM from 'react-dom';
import './sub-choice-css/Hallway.css';
import FirstBedroom from './FirstBedroom';
import SecondBedroom from './SecondBedroom';
import ThirdBedroom from './ThirdBedroom';
import MasterBedroom from './MasterBedroom';
import Hallway from './Hallway';
import { firstLocationImages } from '../assets/firstLocation/firstLocation';

class TopHallway extends React.PureComponent {
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

        this.enterFirstBedroom = this.enterFirstBedroom.bind(this);
        this.enterSecondBedroom = this.enterSecondBedroom.bind(this);
        this.enterThirdBedroom = this.enterThirdBedroom.bind(this);
        this.enterMasterBedroom = this.enterMasterBedroom.bind(this);
        this.enterHallway = this.enterHallway.bind(this);
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

    enterFirstBedroom() {
        console.log('first bedroom');

        let firstBedroom = {
            floorNumber: firstLocationImages[10].floor,
            floor: firstLocationImages[10].location,
            locationImage: firstLocationImages[10].url,
        }

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        console.log(this.props.locationUpdate);

        ReactDOM.render(<FirstBedroom
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.locationUpdate}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.locationUpdate(firstBedroom);
    }

    enterSecondBedroom() {
        console.log('second bedroom');

        let secondBedroom = {
            floorNumber: firstLocationImages[11].floor,
            floor: firstLocationImages[11].location,
            locationImage: firstLocationImages[11].url,
        }

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<SecondBedroom
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.locationUpdate}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.locationUpdate(secondBedroom);
    }

    enterThirdBedroom() {
        console.log('third bedroom');

        let thirdBedroom = {
            floorNumber: firstLocationImages[12].floor,
            floor: firstLocationImages[12].location,
            locationImage: firstLocationImages[12].url,
        }

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<ThirdBedroom
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.locationUpdate}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.locationUpdate(thirdBedroom);
    }

    enterMasterBedroom() {
        console.log('master bedroom');

        let masterBedroom = {
            floorNumber: firstLocationImages[9].floor,
            floor: firstLocationImages[9].location,
            locationImage: firstLocationImages[9].url,
        }

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<MasterBedroom
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            locationUpdate={this.props.locationUpdate}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.locationUpdate(masterBedroom);
    }

    enterHallway() {
        console.log('hallway');

        let hallway = {
            floorNumber: firstLocationImages[2].floor,
            floor: firstLocationImages[2].location,
            locationImage: firstLocationImages[2].url,
        }

        ReactDOM.unmountComponentAtNode(document.getElementById('location-change'));

        ReactDOM.render(<Hallway
            data={this.props.data}
            statUpdate={this.props.statUpdate}
            essenceUpdate={this.props.essenceUpdate}
            updateLocation={this.props.locationUpdate}
        />, document.getElementById('location-change'));

        console.log(this.props);

        this.props.locationUpdate(hallway);
    }

    render() {
        console.log(firstLocationImages);
        return (
            <React.Fragment>
                <div className="choice" style={{ display: this.state.hallwayDisplay }}>
                    <div className='choice-title'>What do you do?</div>
                    <div className="choice-button-container">
                        <button onClick={this.enterFirstBedroom} className="choice-button">
                            Go to First Bedroom
                        </button>
                        <button onClick={this.enterSecondBedroom} className="choice-button">
                            Go to Second Bedroom
                        </button>
                        <button onClick={this.enterThirdBedroom} className="choice-button">
                            Go to Third Bedroom
                        </button>
                        <button onClick={this.enterMasterBedroom} className="choice-button">
                            Go to Master Bedroom
                        </button>
                        <button onClick={this.enterHallway}
                            className="choice-button">
                            Back to Hallway
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

export default TopHallway;