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
                        </div>
                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                It begins again...
                            </div>
                        </div>

                        <br />

                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                ????:
                            </div>
                        </div>
                        <div className='intro-two-container'>
                            <div className='intro-two' >
                                As it always does...
                            </div>
                        </div>

                        <br />

                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                ?????:
                            </div>
                        </div>
                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                This is happening sooner than expected...
                            </div>
                        </div>

                        <br />

                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                ????:
                            </div>
                        </div>
                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                It should not be a problem...
                            </div>
                        </div>

                        <br />

                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                ?????:
                            </div>
                        </div>
                        <div className='intro-one-container'>
                            <div className='intro-one'>
                                The end is the beginning...
                            </div>
                        </div>

                        <br />

                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                ????:
                            </div>
                        </div>
                        <div className='intro-two-container'>
                            <div className='intro-two'>
                                the beginning is the end...
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