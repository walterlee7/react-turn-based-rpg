import React from 'react';
import '../css/Equipment.css';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';

export default class Equipment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weaponDisplay: 'none',
            armorDisplay: 'none',
        }
    }

    weaponDisplay() {
        this.setState({
            weaponDisplay: 'inline-block',
            armorDisplay: 'none'
        })
    }

    armorDisplay() {
        this.setState({
            armorDisplay: 'inline-block',
            weaponDisplay: 'none'
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="player-equipment">
                    <div className="player-equipment-container">
                        <img id="playerEquipmentImage" src={playerPortraits[0].url} alt="player" ></img>
                    </div>
                </div>
                <div className="equipment-button-container">
                    <button onClick={() => this.weaponDisplay()} className="equipmentButton">
                        Weapons
                    </button>
                    <button onClick={() => this.armorDisplay()} className="equipmentButton">
                        Armor
                    </button>
                </div>
                <div className="equipment">
                    <div style={{ display: this.state.weaponDisplay }} className="player1 weapon-container">
                        Novice's Katana - Attack Power: 1, Spirit Power: 1
                    </div>
                    <div style={{ display: this.state.armorDisplay }} className="player1 armor-container">
                        Cotton Dress - Physical Defense: 1, Spirit Defense: 1
                    </div>
                </div>
            </React.Fragment>
        )
    }
}