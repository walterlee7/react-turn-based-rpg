import React from 'react';
import '../css/Inventory.css';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            itemsDisplay: 'none',
            keyItemsDisplay: 'none',
        }
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
                        No Item Data
                    </div>
                    <div style={{ display: this.state.keyItemsDisplay }} className="key-items-container">
                        No Key Item Data
                    </div>
                </div>
            </React.Fragment>
        )
    }
}