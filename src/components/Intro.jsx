import React from 'react';
import './css/Intro.css';
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
                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                ?????:
                            </div>
                            <div className='intro-one'>
                                Hello........
                            </div>
                        </div>

                        <br />

                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                :????
                            </div>
                            <div className='intro-two' >
                                Hello........
                            </div>
                        </div>

                        <br />

                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                ?????:
                            </div>
                            <div className='intro-one'>
                                World.........
                            </div>
                        </div>

                        <br />

                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                :????
                            </div>
                            <div className='intro-two'>
                                World..........
                            </div>
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