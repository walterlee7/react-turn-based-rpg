import React from 'react';
import '../css/Status.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Status extends React.Component {
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
                        HP: 30
                    </div>
                    <div className="player1 status-text">
                        SP: 10
                    </div>
                    <div className="player1 status-text">
                        TP: 0
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