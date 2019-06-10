import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';

class TitleScreen extends React.Component {

    startGame() {
        ReactDOM.render(<Intro />, document.getElementById('title-screen'));
    }

    render() {
        return (
            <div id="title-screen" >
                <div className="title">React Turn Based RPG</div>
                <div className="start-game">
                    <button onClick={() => this.startGame()} className="start-button">
                        Start Game
                    </button>
                </div>
            </div>
        );
    }
}

export default TitleScreen;
