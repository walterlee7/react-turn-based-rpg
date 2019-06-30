import React from 'react';
import '../css/Status.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Status extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            player1: {
                playerLevelA: 0,
                playerExperienceA: 0,
                playerToLevel: 50,
                playerHitPointsA: 0,
                playerMaxHitPointsA: 30,
                playerSpecialPointsA: 0,
                playerMaxSpecialPointsA: 10,
                playerTerrorPointsA: 0,
                playerMaxTerrorPointsA: 100,
                playerStrength: 1,
                playerConstitution: 2,
                playerIntelligence: 5,
                playerSpirit: 5,
                playerAttackPower: 1,
                playerMagicPower: 5,
                playerPhysicalDefense: 1,
                playerMagicDefense: 5,
            },
        }

        // this.addEssence = this.addEssence.bind(this);
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
                        LV: 1
                    </div>
                    <div className="player1 status-text">
                        Class: Spirit Hunter
                    </div>
                    <div className="player1 status-text">
                        EXP: 0
                    </div>
                    <div className="player1 status-text">
                        TO LV: 50
                    </div>
                    <div className="player1 status-text">
                        HP: 30/30
                    </div>
                    <div className="player1 status-text">
                        SP: 10/10
                    </div>
                    <div className="player1 status-text">
                        TP: 0/100
                    </div>
                    <div className="player1 status-text">
                        STR: 1
                    </div>
                    <div className="player1 status-text">
                        CON: 2
                    </div>
                    <div className="player1 status-text">
                        INT: 5
                    </div>
                    <div className="player1 status-text">
                        SPI: 5
                    </div>
                </div>
                <div className="status-text-container">
                    <div className="player1 status-text">
                        Attack Power: 1
                    </div>
                    <div className="player1 status-text">
                        Magic Power: 5
                    </div>
                    <div className="player1 status-text">
                        Physical Defense: 1
                    </div>
                    <div className="player1 status-text">
                        Magic Defense: 5
                    </div>
                </div>
            </React.Fragment>
        )
    }
}