import React from 'react';
import ReactDOM from 'react-dom';
import './css/MainMenu.css';
import Status from './subComponents/Status';
import Skills from './subComponents/Skills';
import Inventory from './subComponents/Inventory';
import Equipment from './subComponents/Equipment';
import Quests from './subComponents/Quests';
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

    closeMenu() {
        console.log(this.props.data);
        console.log('close menu');
        this.props.statUpdate(this.state);
        this.props.close();
    }

    handleClick(num) {
        if (num === 1) {
            ReactDOM.render(<Status />, document.getElementById('subMenu-location'));
        }
        else if (num === 2) {
            ReactDOM.render(<Skills />, document.getElementById('subMenu-location'));
        }
        else if (num === 3) {
            ReactDOM.render(<Inventory />, document.getElementById('subMenu-location'));
        }
        else if (num === 4) {
            ReactDOM.render(<Equipment />, document.getElementById('subMenu-location'));
        }
        else if (num === 5) {
            ReactDOM.render(<Quests />, document.getElementById('subMenu-location'));
        }
        else if (num === 6) {
            ReactDOM.render(<Map />, document.getElementById('subMenu-location'));
        }
        else {
            alert('Sub Menu Error');
        }
    }

    render() {
        return (
            <div id="mainMenu">
                <div className="mainMenu-container">
                    <button onClick={() => this.closeMenu()} className="game-back">Close Menu</button>
                    <div>
                        <div className="subMenu-container">
                            <div className="subMenu-div">
                                <button onClick={() => this.handleClick(1)} className="subMenu">
                                    Status
                            </button>
                                <button onClick={() => this.handleClick(2)} className="subMenu">
                                    Skills
                            </button>
                                <button onClick={() => this.handleClick(3)} className="subMenu">
                                    Inventory
                            </button>
                                <button onClick={() => this.handleClick(4)} className="subMenu">
                                    Equipment
                            </button>
                                <button onClick={() => this.handleClick(5)} className="subMenu">
                                    Quests
                            </button>
                                <button onClick={() => this.handleClick(6)} className="subMenu">
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