import React from 'react';

class TitleScreen extends React.Component {
    render() {
        return (
            <div className="title-screen" >
                <div className="title">React Turn Based RPG</div>
                <div className="start-game">
                    <button className="start-button">
                        Start Game
                    </button>
                </div>
            </div>
        );
    }
}

export default TitleScreen;
