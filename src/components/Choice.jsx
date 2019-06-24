import React from 'react';
import './css/Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }

        this.enterHouse = this.enterHouse.bind(this);
        this.checkMysteriousFlower = this.checkMysteriousFlower.bind(this);
        this.checkMailbox = this.checkMailbox.bind(this);
        this.runAway = this.runAway.bind(this);
    }

    enterHouse() {
        this.setState({
            text: 'House is locked for now...'
        })
    }

    checkMysteriousFlower() {
        this.setState({
            text: 'This flower...'
        })
    }

    checkMailbox() {
        this.setState({
            text: 'You check the mailbox and...'
        })
    }

    runAway() {
        this.setState({
            text: 'Not an Option...'
        })
    }

    render() {
        return (
            <div className="choice">
                <div className='choice-title'>What do you do?</div>
                <div className="choice-button-container">
                    <button onClick={this.enterHouse} className="choice-button">
                        Enter House
                </button>
                    <button onClick={this.checkMysteriousFlower} className="choice-button">
                        Check Mysterious Flower
                </button>
                    <button onClick={this.checkMailbox} className="choice-button">
                        Check Mailbox
                </button>
                    <button onClick={this.runAway} className="choice-button">
                        Run Away
                </button>
                </div>
                <div className="choice-text-container">
                    <div className="choice-text">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Choice;