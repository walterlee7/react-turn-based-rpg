import React from 'react';
import Intro from './Intro';
import Instructions from './Instructions';
import introSong from './audio/music/intro.mp3';

class TitleScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayTitleScreen: 'initial',
            displayIntro: 'none',
            displayInstructions: 'none',
            startIntroAudio: false,
        }

        this.closeInstructions = this.closeInstructions.bind(this);
        this.updateAudio = this.updateAudio.bind(this);
    }

    async startIntro() {
        await this.setState({
            displayTitleScreen: 'none',
            displayIntro: 'initial',
            startIntroAudio: true,
        })

        console.log(this.state.startIntroAudio);
        if (this.state.startIntroAudio === true) {
            let audioSong = document.getElementById('song');
            audioSong.play();
        }
    }

    displayInstructions() {
        this.setState({
            displayTitleScreen: 'none',
            displayInstructions: 'initial'
        })
    }

    closeInstructions() {
        this.setState({
            displayTitleScreen: 'initial',
            displayInstructions: 'none'
        })
    }

    async updateAudio() {
        await this.setState({
            startIntroAudio: false,
        })

        if (this.state.startIntroAudio === false) {
            let audioSong = document.getElementById('song');
            audioSong.remove();
        }
    }

    render() {
        console.log(this.state.startIntroAudio);
        return (
            <React.Fragment>
                <audio id="song" src={introSong}></audio>
                <div style={{ display: this.state.displayTitleScreen }} id="title-screen" >
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

                <div style={{ display: this.state.displayInstructions }} id='instruction-div'>
                    <Instructions close={this.closeInstructions} />
                </div>

                <div style={{ display: this.state.displayIntro }} id="intro-div">
                    <Intro stopIntroMusic={this.updateAudio} />
                </div>
            </React.Fragment>
        );
    }
}

export default TitleScreen;
