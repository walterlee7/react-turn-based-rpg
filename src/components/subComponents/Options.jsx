import React from 'react';
import '../css/Options.css';

export default class Options extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            audioOptionsDisplay: 'none',
            volume: 100,
            checked: true,
        }

        this.audioVolume = this.audioVolume.bind(this);
        this.soundToggle = this.soundToggle.bind(this);
    }

    audioOptionsDisplay() {
        this.setState({
            audioOptionsDisplay: 'inline-block',
        })
    }

    audioVolume() {
        let setVolume = document.getElementById('volume-range');
        setVolume.addEventListener('input', () => {
            let volume = setVolume.value / 100;

            this.setState({
                volume: setVolume.value,
            })

            let audioElements = document.querySelectorAll('#music audio');

            for (let i = 0; i < audioElements.length; i++) {
                audioElements[i].volume = volume;
            }
        })
    }

    soundToggle() {
        let audioElements = document.querySelectorAll('audio');

        if (this.state.checked) {
            this.setState({
                checked: false,
            })

            for (let i = 0; i < audioElements.length; i++) {
                audioElements[i].muted = true;
            }
        } else {
            this.setState({
                checked: true,
            })

            for (let i = 0; i < audioElements.length; i++) {
                audioElements[i].muted = false;
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="options">
                    <button onClick={() => this.audioOptionsDisplay()} className="audioOptionsButton">
                        Audio
                    </button>
                </div>
                <div className="audio-options">
                    <div style={{ display: this.state.audioOptionsDisplay }} className="audio-options-container">
                        <div id="volume-control-switch">
                            <label id='volume-control-label' htmlFor="volume-range">Volume {this.state.volume}</label>
                            <input onChange={this.audioVolume} id="volume-range" type="range" value={this.state.volume} />
                        </div>
                        <br />
                        <div id="sound-switch">
                            <label className="sound-control-label" htmlFor="sound-switch-input">Sound</label>
                            <input onChange={this.soundToggle} checked={this.state.checked} type="checkbox" id="sound-switch-input" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}