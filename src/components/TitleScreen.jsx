import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';

class TitleScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 1
        }
    }

    startGame() {
        ReactDOM.render(<Intro />, document.getElementById('intro-div'));

        this.setState({
            display: 'none'
        })
    }

    render() {
        return (
            <div id="title-screen" >
                <div style={{ display: this.state.display }} className="title">React Turn Based RPG</div>
                <div style={{ display: this.state.display }} id="start-game">
                    <button onClick={() => this.startGame()} className="start-button">
                        Start Game
                    </button>
                </div>
                <div id='intro-div' />
            </div>
        );
    }
}

export default TitleScreen;
