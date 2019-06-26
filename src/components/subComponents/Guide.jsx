import React from 'react';
import '../css/Guide.css';

export default class Guide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            glossaryDisplay: 'none',
            tutorialDisplay: 'none',
            glossaryArray: [],
        }
    }

    glossaryDisplay() {
        let glossaryText = [
            "LV = Player Level",
            "HP = Hit Points",
            "SP = Special Points",
            "TP = Terror Points",
        ];

        this.setState({
            glossaryDisplay: 'inline-block',
            tutorialDisplay: 'none',
            glossaryArray: glossaryText,
        })
    }

    tutorialDisplay() {
        this.setState({
            tutorialDisplay: 'inline-block',
            glossaryDisplay: 'none'
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
                        No Tutorial Data.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}