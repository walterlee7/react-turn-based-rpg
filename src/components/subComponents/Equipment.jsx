import React from 'react';
import '../css/Equipment.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Equipment extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="player-equipment">
                    <div className="player-equipment-container">
                        <img id="playerEquipmentImage" src={playerPortraits[0].url} alt="player" ></img>
                    </div>
                </div>
                <div className="equipment">
                    <div className="equipment-container">
                        No Equipment Data
                    </div>
                </div>
            </React.Fragment>
        )
    }
}