import React from 'react';
import './css/MainMenu.css';


class MainMenu extends React.Component {

    closeMenu() {
        console.log('close menu');
    }

    render() {
        return (
            <div id="instructions">
                <div className="instructions-container">
                    <button onClick={() => this.closeMenu()} className="titlescreen-back">Close Menu</button>
                    <div className="instruction-title">
                        Instructions
                    </div>
                    <div>
                        <div className="instruction-text">
                            <div>
                                This game does not have a save feature or checkpoints.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;