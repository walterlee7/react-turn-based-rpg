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
                        Status will go here.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}