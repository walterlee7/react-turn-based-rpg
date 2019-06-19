import React from 'react';
import '../css/Quests.css';

export default class Quests extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainDisplay: 'none',
            sideDisplay: 'none',
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
                <div className="quest">
                    <button onClick={() => this.mainQuestDisplay()} className="questButton">
                        Main Quest
                    </button>
                    <button onClick={() => this.sideQuestDisplay()} className="questButton">
                        Side Quest
                    </button>
                </div>
                <div className="quest-text">
                    <div style={{ display: this.state.mainDisplay }} className="main-quest-container">
                        Investigate the Haunted House
                        <hr />
                        <ol style={{ float: 'left' }}>
                            - Enter the House...
                        </ol>
                    </div>
                    <div style={{ display: this.state.sideDisplay }} className="side-quest-container">
                        No Side Quest Data.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}