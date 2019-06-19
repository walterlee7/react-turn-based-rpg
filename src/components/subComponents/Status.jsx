import React from 'react';
import '../css/Status.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Status extends React.Component {
    render() {
        return (
            <div className="status">
                <div className="status-container">
                    <img id="playerStatusImage" src={playerPortraits[0].url} alt="player" ></img>
                </div>
            </div>
        )
    }
}