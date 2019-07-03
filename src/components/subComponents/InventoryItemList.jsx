import React from 'react';

const InventoryItemList = (props) => {
    // console.log(props.useItem);

    let listItems = props.items.map((item, index) => {
        // console.log(item);
        return (
            <div key={index} className="item-text">
                <button onClick={() => { props.useItem(item.id) }} className="item-number-button">
                    {item.itemNumber}
                </button>
                <div className="item-description">
                    {item.itemDescription}
                </div>
            </div>
        );
    });
    return (
        <div>
            {listItems}
        </div>
    );
}

export default InventoryItemList;
