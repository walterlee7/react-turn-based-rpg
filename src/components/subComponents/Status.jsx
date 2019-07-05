import React from 'react';
import '../css/Status.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Status extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
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

        this.updateStatus = this.updateStatus.bind(this);
    }

    componentDidMount() {
        this.updateStatus();
    }

    updateStatus() {

        console.log('status update');

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
            },
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="status">
                    <div className="status-container">
                        <img id="playerStatusImage" src={playerPortraits[0].url} alt="player" ></img>
                    </div>
                </div>
                <div className="status-text-container">
                    <div className="player1 status-text">
                        LV: {this.state.player1.playerLevelA}
                    </div>
                    <div className="player1 status-text">
                        Class: Spirit Hunter
                    </div>
                    <div className="player1 status-text">
                        EXP: {this.state.player1.playerExperienceA}
                    </div>
                    <div className="player1 status-text">
                        TO LV: {this.state.player1.playerToLevelA}
                    </div>
                    <div className="player1 status-text" style={{ color: this.props.data.lowHealth }}>
                        <div className={this.props.data.lowHealthBlink}>HP:</div>
                        {this.state.player1.playerHitPointsA}/{this.state.player1.playerMaxHitPointsA}
                    </div>
                    <div className="player1 status-text">
                        SP: {this.state.player1.playerSpecialPointsA}/{this.state.player1.playerMaxSpecialPointsA}
                    </div>
                    <div className="player1 status-text">
                        TP: {this.state.player1.playerTerrorPointsA}/{this.state.player1.playerMaxTerrorPointsA}
                    </div>
                    <div className="player1 status-text">
                        STR: {this.state.player1.playerStrengthA}
                    </div>
                    <div className="player1 status-text">
                        CON: {this.state.player1.playerConstitutionA}
                    </div>
                    <div className="player1 status-text">
                        INT: {this.state.player1.playerIntelligenceA}
                    </div>
                    <div className="player1 status-text">
                        SPI: {this.state.player1.playerSpiritA}
                    </div>
                </div>
                <div className="status-text-container">
                    <div className="player1 status-text">
                        Attack Power: {this.state.player1.playerAttackPowerA}
                    </div>
                    <div className="player1 status-text">
                        Magic Power: {this.state.player1.playerMagicPowerA}
                    </div>
                    <div className="player1 status-text">
                        Physical Defense: {this.state.player1.playerPhysicalDefenseA}
                    </div>
                    <div className="player1 status-text">
                        Magic Defense: {this.state.player1.playerMagicDefenseA}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}