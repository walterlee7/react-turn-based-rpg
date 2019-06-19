import React from 'react';
import '../css/Skills.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Skills extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="player-skills">
                    <div className="player-skills-container">
                        <img id="playerSkillsImage" src={playerPortraits[0].url} alt="player" ></img>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills-container">
                        No Skill Data
                    </div>
                </div>
            </React.Fragment>
        )
    }
}