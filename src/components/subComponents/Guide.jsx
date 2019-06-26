import React from 'react';
import '../css/Guide.css';

export default class Guide extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainDisplay: 'none',
            sideDisplay: 'none',
            glossaryArray: [],
        }
    }

    mainQuestDisplay() {
        this.setState({
            mainDisplay: 'inline-block',
            sideDisplay: 'none'
        })
    }

    sideQuestDisplay() {
        this.setState({
            sideDisplay: 'inline-block',
            mainDisplay: 'none'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="guide">
                    <button onClick={() => this.mainQuestDisplay()} className="guideButton">
                        Glossary
                    </button>
                    <button onClick={() => this.sideQuestDisplay()} className="guideButton">
                        Tutorial
                    </button>
                </div>
                <div className="guide-text">
                    <div style={{ display: this.state.mainDisplay }} className="glossary-container">
                        HP = Hit Points
                    </div>
                    <div style={{ display: this.state.sideDisplay }} className="tutorial-container">
                        No Tutorial Data.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}