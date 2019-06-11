import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

class Intro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 1
        }
    }

    startGame() {
        ReactDOM.render(<Game />, document.getElementById('game-div'));

        this.setState({
            display: 'none'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.display }} className="intro-container">
                    <div className="intro">
                        <div>
                            This is where introduction will appear.
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

                <div id="game-div"></div>
            </React.Fragment>

        );
    }
}

export default Intro;