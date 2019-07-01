import React from 'react';
import '../css/Inventory.css';

export default class Inventory extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            itemsDisplay: 'none',
            keyItemsDisplay: 'none',
            essence: 0,
            itemNumberFirstAid: 0,
        }

        this.addEssence = this.addEssence.bind(this);
        this.useItem = this.useItem.bind(this);
    }

    componentDidMount() {
        this.addEssence();
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

    useItem() {
        console.log("item used");
    }

    render() {
        return (
            <React.Fragment>
                <div className="inventory-button-container">
                    <button onClick={() => this.itemsDisplay()} className="inventoryButton">
                        Items
                    </button>
                    <button onClick={() => this.keyItemsDisplay()} className="inventoryButton">
                        Key Items
                    </button>
                </div>
                <div className="inventory">
                    <div style={{ display: this.state.itemsDisplay }} className="items-container">
                        <div className="essence-container">
                            Essence: {this.state.essence} - game currency.
                        </div>
                        <div className="item-text">
                            <button onClick={this.useItem} className="item-number-button">
                                {this.state.itemNumberFirstAid}
                            </button>
                            <div className="item-description">
                                First Aid - heals for 30% HP. First Aid - heals for 30% HP.
                            </div>

                        </div>
                    </div>
                    <div style={{ display: this.state.keyItemsDisplay }} className="key-items-container">
                        Lydia's Necklace
                    </div>
                </div>
            </React.Fragment>
        )
    }
}