import React from 'react';
import '../css/Guide.css';

export default class Guide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            glossaryDisplay: 'none',
            tutorialDisplay: 'none',
            glossaryArray: [],
            tutorialArray: [],
        }
    }

    glossaryDisplay() {
        let glossaryText = [
            "LV = Player Level",
            "EXP = Experience",
            "HP = Hit Points",
            "SP = Special Points",
            "TP = Terror Points",
            "STR = Strength",
            "CON = Constitution",
            "INT = Intelligence",
            "SPI = Spirit",
        ];

        this.setState({
            glossaryDisplay: 'inline-block',
            tutorialDisplay: 'none',
            glossaryArray: glossaryText,
        })
    }

    tutorialDisplay() {
        let tutorialText = [
            "When Terror Points reaches 100, you will won't be able take any actions during that battle turn, but Terror Points will go down by 50% on the next turn.",
            "Game Over when all party member hit points reach zero.",
        ];

        this.setState({
            tutorialDisplay: 'inline-block',
            glossaryDisplay: 'none',
            tutorialArray: tutorialText,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="guide">
                    <button onClick={() => this.glossaryDisplay()} className="guideButton">
                        Glossary
                    </button>
                    <button onClick={() => this.tutorialDisplay()} className="guideButton">
                        Tutorial
                    </button>
                </div>
                <div className="guide-text">
                    <div style={{ display: this.state.glossaryDisplay }} className="glossary-container">
                        {this.state.glossaryArray.map((text, index) => {
                            return (<div key={index} className='glossary-text'>{text}</div>);
                        })}
                    </div>
                    <div style={{ display: this.state.tutorialDisplay }} className="tutorial-container">
                        {this.state.tutorialArray.map((text, index) => {
                            return (<div key={index} className='tutorial-text'>{text}</div>);
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}