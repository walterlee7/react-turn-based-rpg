import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import Instructions from './Instructions';

class TitleScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 1
        }
    }

    startIntro() {
        ReactDOM.render(<Intro />, document.getElementById('intro-div'));

        this.setState({
            display: 'none'
        })
    }

    displayInstructions() {
        ReactDOM.render(<Instructions />, document.getElementById('intro-div'));

        this.setState({
            display: 'none'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.display }} id="title-screen" >
                    <div className="title">React Turn Based RPG</div>
                    <div id="start-game">
                        <button onClick={() => this.startIntro()} className="start-button">
                            Start Game
                    </button>
                    </div>
                    <div id="instruction-container">
                        <button onClick={() => this.displayInstructions()} id="instruction-button">
                            Instructions
                    </button>
                    </div>
                </div>

                <div id='intro-div' />
            </React.Fragment>
        );
    }
}

export default TitleScreen;
