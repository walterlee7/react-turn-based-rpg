import React from 'react';
import './css/Choice.css';

class Choice extends React.Component {
    render() {
        return (
            <div className="choice">
                <div className='choice-title'>What do you do?</div>
                <div className="choice-button-container">
                    <button className="choice-button">
                        Enter House
                </button>
                    <button className="choice-button">
                        Check Mysterious Flower
                </button>
                    <button className="choice-button">
                        Check Mailbox
                </button>
                    <button className="choice-button">
                        Run Away
                </button>
                </div>
            </div>
        )
    }
}

export default Choice;