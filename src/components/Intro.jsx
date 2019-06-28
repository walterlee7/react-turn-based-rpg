import React from 'react';
import './css/Intro.css';
import Game from './Game';
import houseSong from './audio/music/house-level.mp3';

class Intro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayIntro: 'initial',
            displayGame: 'none',
            startHouseAudio: false,
        }
    }

    async startGame() {
        await this.setState({
            displayIntro: 'none',
            displayGame: 'initial',
            startHouseAudio: true,
        })

        this.props.stopIntroMusic();

        if (this.state.startHouseAudio === true) {
            let houseSong = document.getElementById('house-song');
            houseSong.play();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="music">
                    <audio loop={true} id="house-song" src={houseSong}></audio>
                </div>
                <div style={{ display: this.state.displayIntro }} className="intro-container">
                    <div className="intro">

                        <div className="intro-text-container">
                            In a dark place, two unknown figures meet.
                        </div>

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

                        <button onClick={() => this.startGame()} className="intro-next-button">Next</button>
                    </div>
                </div>

                <div style={{ display: this.state.displayGame }} id="game-div">
                    <Game stopHouseMusic />
                </div>
            </React.Fragment>

        );
    }
}

export default Intro;