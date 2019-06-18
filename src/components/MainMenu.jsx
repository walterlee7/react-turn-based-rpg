import React from 'react';
import ReactDOM from 'react-dom';
import './css/MainMenu.css';
import Map from './subComponents/Map';


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

    handleClick(num) {
        if (num === 0) {
            ReactDOM.render(<Map />, document.getElementById('subMenu-location'));
        }
        else {
            alert('Sub Menu Error');
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
                                    Skills
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
                                <button onClick={() => this.handleClick(0)} className="subMenu">
                                    Map
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