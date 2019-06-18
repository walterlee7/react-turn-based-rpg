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
            <div id="mainMenu">
                <div className="mainMenu-container">
                    <button onClick={() => this.closeMenu()} className="game-back">Close Menu</button>
                    <div>
                        <div className="subMenu-container">
                            <div className="subMenu-div">
                                <button className="subMenu">
                                    Status
                            </button>
                                <button className="subMenu">
                                    Inventory
                            </button>
                                <button className="subMenu">
                                    Equipment
                            </button>
                                <button className="subMenu">
                                    Quests
                            </button>
                                <button className="subMenu">
                                    Glossary
                            </button>
                            </div>
                        </div>
                    </div>
                    <div id="subMenu-location" />
                </div>
            </div>
        );
    }
}

export default MainMenu;