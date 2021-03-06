import React from 'react';
import ReactDOM from 'react-dom';
import './css/MainMenu.css';
import Status from './subComponents/Status';
import Skills from './subComponents/Skills';
import Inventory from './subComponents/Inventory';
import Equipment from './subComponents/Equipment';
import Quests from './subComponents/Quests';
import Map from './subComponents/Map';
import Guide from './subComponents/Guide';
import Options from './subComponents/Options';


class MainMenu extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            playerLevelA: 2,
            playerHitPointsA: 35,
            playerSpecialPointsA: 12,
            playerTerrorPointsA: 1,
        }

        this.closeMenu = this.closeMenu.bind(this);

    }

    closeMenu() {
        // console.log(this.props.data);
        console.log('close menu');
        this.props.close();
        ReactDOM.unmountComponentAtNode(document.getElementById('subMenu-location'));
    }

    handleClick(num) {
        if (num === 1) {
            ReactDOM.render(<Status data={this.props.data} />, document.getElementById('subMenu-location'));
        }
        else if (num === 2) {
            ReactDOM.render(<Skills />, document.getElementById('subMenu-location'));
        }
        else if (num === 3) {
            ReactDOM.render(<Inventory
                data={this.props.data}
                updateStats={this.props.statUpdate}
                updateItems={this.props.itemUpdate}
            />, document.getElementById('subMenu-location'));
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
        else if (num === 7) {
            ReactDOM.render(<Guide />, document.getElementById('subMenu-location'));
        }
        else if (num === 8) {
            ReactDOM.render(<Options />, document.getElementById('subMenu-location'));
        }
        else {
            alert('Sub Menu Error');
        }
    }

    render() {
        return (
            <div id="mainMenu">
                <div className="mainMenu-container">
                    <button onClick={() => this.closeMenu()} className="close-menu-button">Close Menu</button>
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
                                <button onClick={() => this.handleClick(7)} className="subMenu">
                                    Guide
                                </button>
                                <button onClick={() => this.handleClick(8)} className="subMenu">
                                    Options
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