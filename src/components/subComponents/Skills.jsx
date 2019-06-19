import React from 'react';
import '../css/Skills.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Skills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            physicalSkillsDisplay: 'none',
            spiritSkillsDisplay: 'none',
            terrorSkillsDisplay: 'none',
        }
    }

    physicalSkillsDisplay() {
        this.setState({
            physicalSkillsDisplay: 'inline-block',
            spiritSkillsDisplay: 'none',
            terrorSkillsDisplay: 'none',
        })
    }

    spiritSkillsDisplay() {
        this.setState({
            spiritSkillsDisplay: 'inline-block',
            terrorSkillsDisplay: 'none',
            physicalSkillsDisplay: 'none',
        })
    }

    terrorSkillsDisplay() {
        this.setState({
            terrorSkillsDisplay: 'inline-block',
            physicalSkillsDisplay: 'none',
            spiritSkillsDisplay: 'none',
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="player-skills">
                    <div className="player-skills-container">
                        <img id="playerSkillsImage" src={playerPortraits[0].url} alt="player" ></img>
                    </div>
                </div>
                <div className="skill-button-container">
                    <button onClick={() => this.physicalSkillsDisplay()} className="skillButton">
                        Physical Skills
                    </button>
                    <button onClick={() => this.spiritSkillsDisplay()} className="skillButton">
                        Magic Skills
                    </button>
                    <button onClick={() => this.terrorSkillsDisplay()} className="skillButton">
                        Terror Skills
                    </button>
                </div>
                <div className="skills">
                    <div style={{ display: this.state.physicalSkillsDisplay }} className="player1 physical-skill-container">
                        Slash - Attack Power: 5, SP Cost: 2;
                    </div>
                    <div style={{ display: this.state.spiritSkillsDisplay }} className="player1 spirit-skill-container">
                        Shine - Spirit Power: 8, SP Cost: 2;
                    </div>
                    <div style={{ display: this.state.terrorSkillsDisplay }} className="player1 terror-skill-container">
                        No Terror Skills Learned.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}