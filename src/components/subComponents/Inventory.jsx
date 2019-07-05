import React from 'react';
import InventoryItemList from './InventoryItemList';
import { playerPortraits } from '../assets/playerPortraits/playerPortraits';
import '../css/Inventory.css';

export default class Inventory extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            itemsDisplay: 'none',
            keyItemsDisplay: 'none',
            essence: 0,
            player1: {
                playerLevelA: 1,
                playerExperienceA: 0,
                playerToLevelA: 50,
                playerHitPointsA: 30,
                playerMaxHitPointsA: 30,
                playerSpecialPointsA: 10,
                playerMaxSpecialPointsA: 10,
                playerTerrorPointsA: 0,
                playerMaxTerrorPointsA: 100,
                playerStrengthA: 1,
                playerConstitutionA: 2,
                playerIntelligenceA: 5,
                playerSpiritA: 5,
                playerAttackPowerA: 1,
                playerMagicPowerA: 5,
                playerPhysicalDefenseA: 1,
                playerMagicDefenseA: 5,
            },
        }

        this.addEssence = this.addEssence.bind(this);
        this.useItem = this.useItem.bind(this);
        this.inventoryUpdate = this.inventoryUpdate.bind(this);
    }

    componentDidMount() {
        this.addEssence();
    }

    inventoryUpdate() {
        console.log('inventory update');

        this.setState({
            player1: {
                playerLevelA: this.props.data.player1.playerLevelA,
                playerExperienceA: this.props.data.player1.playerExperienceA,
                playerToLevelA: this.props.data.player1.playerToLevelA,
                playerHitPointsA: this.props.data.player1.playerHitPointsA,
                playerMaxHitPointsA: this.props.data.player1.playerMaxHitPointsA,
                playerSpecialPointsA: this.props.data.player1.playerSpecialPointsA,
                playerMaxSpecialPointsA: this.props.data.player1.playerMaxSpecialPointsA,
                playerTerrorPointsA: this.props.data.player1.playerTerrorPointsA,
                playerMaxTerrorPointsA: this.props.data.player1.playerMaxTerrorPointsA,
                playerStrengthA: this.props.data.player1.playerStrengthA,
                playerConstitutionA: this.props.data.player1.playerConstitutionA,
                playerIntelligenceA: this.props.data.player1.playerIntelligenceA,
                playerSpiritA: this.props.data.player1.playerSpiritA,
                playerAttackPowerA: this.props.data.player1.playerAttackPowerA,
                playerMagicPowerA: this.props.data.player1.playerMagicPowerA,
                playerPhysicalDefenseA: this.props.data.player1.playerPhysicalDefenseA,
                playerMagicDefenseA: this.props.data.player1.playerPhysicalDefenseA,
            },
        })
    }

    itemsDisplay() {
        this.setState({
            itemsDisplay: 'inline-block',
            keyItemsDisplay: 'none'
        })
    }

    keyItemsDisplay() {
        this.setState({
            keyItemsDisplay: 'inline-block',
            itemsDisplay: 'none'
        })
    }

    addEssence() {
        this.setState({
            essence: this.props.data.essence,
        })
    }

    useItem(itemId) {
        this.inventoryUpdate();
        //console.log(this.props.data.items);

        //console.log(itemId);

        this.props.data.items.filter(item => {
            if (item.id === itemId && item.itemNumber > 0) {
                let used = item.itemNumber - 1;
                //console.log(used);

                let firstAidHeal = this.props.data.player1.playerMaxHitPointsA * 0.3;
                let healApplied = this.props.data.player1.playerHitPointsA + firstAidHeal;

                let waterUsed = this.props.data.player1.playerMaxSpecialPointsA * 0.3;
                let spApplied = this.props.data.player1.playerSpecialPointsA + waterUsed;

                if (used >= 0) {
                    item["itemNumber"] = used;
                    if (item.id === "First Aid") {
                        this.props.data.player1.playerHitPointsA = healApplied;
                    }
                    if (item.id === "Water") {
                        this.props.data.player1.playerSpecialPointsA = spApplied;
                    }
                }
                //console.log(item);
                return item;
            } else {
                return null;
            }
        });

        this.props.updateItems(this.props.data.items);
        this.props.updateStats(this.props.data.player1);
    }

    render() {
        return (
            <React.Fragment>
                <div className="party mainParty1">
                    <div className="playerInfo-container">
                        <div className="playerInfo">
                            LV: {this.props.data.player1.playerLevelA}
                        </div>
                        <div className="playerInfo" style={{ color: this.props.data.lowHealth }}>
                            <div className={this.props.data.lowHealthBlink}>HP:</div> {this.props.data.player1.playerHitPointsA}/{this.props.data.player1.playerMaxHitPointsA}
                        </div>
                        <div className="playerInfo">
                            SP: {this.props.data.player1.playerSpecialPointsA}/{this.props.data.player1.playerMaxSpecialPointsA}
                        </div>
                        <div className="playerInfo">
                            TP: {this.props.data.player1.playerTerrorPointsA}/{this.props.data.player1.playerMaxTerrorPointsA}
                        </div>
                    </div>
                    <img id="playerImage" src={playerPortraits[0].url} alt="player" ></img>
                </div>
                {/* <div className="party mainParty2">
                    <div className="playerInfo-container">
                        <div className="playerInfo">
                            LV: {this.state.playerLevelB}
                        </div>
                        <div className="playerInfo">
                            HP: {this.state.playerHitPointsB}
                        </div>
                        <div className="playerInfo">
                            SP: {this.state.playerSpecialPointsB}
                        </div>
                        <div className="playerInfo">
                            TP: {this.state.playerTerrorPointsB}
                        </div>
                    </div>
                    <img id="playerImage" src={Image} alt="cloud" ></img>
                </div>
                <div className="party mainParty3">
                    <div className="playerInfo-container">
                        <div className="playerInfo">
                            LV: {this.state.playerLevelC}
                        </div>
                        <div className="playerInfo">
                            HP: {this.state.playerHitPointsC}
                        </div>
                        <div className="playerInfo">
                            SP: {this.state.playerSpecialPointsC}
                        </div>
                        <div className="playerInfo">
                            TP: {this.state.playerTerrorPointsC}
                        </div>
                    </div>
                    <img id="playerImage" src={Image} alt="cloud" ></img>
                </div>
                <div className="party mainParty4">
                    <div className="playerInfo-container">
                        <div className="playerInfo">
                            LV: {this.state.playerLevelD}
                        </div>
                        <div className="playerInfo">
                            HP: {this.state.playerHitPointsD}
                        </div>
                        <div className="playerInfo">
                            SP: {this.state.playerSpecialPointsD}
                        </div>
                        <div className="playerInfo">
                            TP: {this.state.playerTerrorPointsD}
                        </div>
                    </div>
                    <img id="playerImage" src={Image} alt="cloud" ></img>
                </div> */}
                <div className="inventory-button-container">
                    <button onClick={() => this.itemsDisplay()} className="inventoryButton">
                        Items
                    </button>
                    <button onClick={() => this.keyItemsDisplay()} className="inventoryButton">
                        Key Items
                    </button>
                </div>
                <div className="inventory">
                    <div style={{ backgroundColor: 'white' }}>{this.props.data.inventoryCounter}</div>
                    <div style={{ display: this.state.itemsDisplay }} className="items-container">
                        <div className="essence-container">
                            {this.state.essence} Essence: game currency.
                        </div>

                        <InventoryItemList
                            useItem={this.useItem}
                            items={this.props.data.items}
                        />

                    </div>
                    <div style={{ display: this.state.keyItemsDisplay }} className="key-items-container">
                        Lydia's Necklace
                    </div>
                </div>
            </React.Fragment >
        )
    }
}