import React from 'react';
import '../css/Options.css';

export default class Options extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            audioOptionsDisplay: 'none',
            // volume: '',
        }

        this.audioVolume = this.audioVolume.bind(this);
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
            let audioElements = document.querySelectorAll('audio');

            for (let i = 0; i < audioElements.length; i++) {
                audioElements[i].volume = volume;
            }
        })

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
                            <label id='volume-control-label' htmlFor="volume-range">Volume</label>
                            <input onChange={this.audioVolume} id="volume-range" type="range" />
                        </div>
                        <br />
                        <div id="sound-switch">
                            <label className="sound-control-label" htmlFor="sound-switch-input">Sound</label>
                            <input checked type="checkbox" id="sound-switch-input" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}