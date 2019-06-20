import React from 'react';

class Instructions extends React.Component {

    goBack() {
        this.props.close();
    }

    render() {
        return (
            <div id="instructions">
                <div className="instructions-container">
                    <div className="instruction-title">
                        Instructions
                    </div>
                    <div>
                        <div className="instruction-text">
                            <div>
                                This game does not have a save feature or checkpoints.
                            </div>
                            <br />
                            <div>
                                The game difficulty is set to "Don't Die".
                            </div>
                            <br />
                            <div>
                                If all character HPs go to zero, the game ends.
                            </div>
                            <br />
                            <div>
                                Everything else will be left up to the player to figure out.
                            </div>
                            <br />
                            <div>
                                I may add checkpoints in the future, but no promises.
                            </div>
                            <button onClick={() => this.goBack()} className="titlescreen-back">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructions;