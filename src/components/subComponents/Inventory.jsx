import React from 'react';
import '../css/Inventory.css';

export default class Inventory extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            itemsDisplay: 'none',
            keyItemsDisplay: 'none',
            essence: 0,
        }

        this.addEssence = this.addEssence.bind(this);
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
                        Essence: {this.state.essence}
                    </div>
                    <div style={{ display: this.state.keyItemsDisplay }} className="key-items-container">
                        Lydia's Necklace
                    </div>
                </div>
            </React.Fragment>
        )
    }
}