import React from 'react';
import './css/MainMenu.css';


class MainMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerLevelA: 2,
            playerHitPointsA: 35,
            playerSpecialPointsA: 12,
            playerVengancePointsA: 1,
        }
    }


    closeMenu() {
        console.log(this.props.data);
        console.log('close menu');
        this.props.statUpdate(this.state);
        this.props.close();
    }

    render() {
        return (
            <div id="instructions">
                <div className="instructions-container">
                    <button onClick={() => this.closeMenu()} className="titlescreen-back">Close Menu</button>
                    <div className="instruction-title">
                        Main Menu
                    </div>
                    <div>
                        <div className="instruction-text">
                            <div>
                                Sub Menu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;