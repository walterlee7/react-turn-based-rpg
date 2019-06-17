import React from 'react';
import Game from './Game';

class Intro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayIntro: 'initial',
            displayGame: 'none'
        }
    }

    startGame() {
        this.setState({
            displayIntro: 'none',
            displayGame: 'initial'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.displayIntro }} className="intro-container">
                    <div className="intro">
                        <div>
                            This is where the introduction will appear.
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <button onClick={() => this.startGame()} className="intro-next">Next</button>
                    </div>
                </div>

                <div style={{ display: this.state.displayGame }} id="game-div">
                    <Game />
                </div>
            </React.Fragment>

        );
    }
}

export default Intro;