import React from 'react';
import './css/Choice.css';

class Choice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            player1: {
                playerLevelA: 0,
                playerHitPointsA: 0,
                playerSpecialPointsA: 0,
                playerTerrorPointsA: 0,
            }
        }

        this.enterHouse = this.enterHouse.bind(this);
        this.checkMysteriousFlower = this.checkMysteriousFlower.bind(this);
        this.checkMailbox = this.checkMailbox.bind(this);
        this.runAway = this.runAway.bind(this);
    }

    componentDidMount() {
        this.update();
    }

    update() {
        console.log(this.props.data.playerLevelA);

        this.setState({
            player1: {
                playerLevelA: this.props.data.playerLevelA,
                playerHitPointsA: this.props.data.playerHitPointsA,
                playerSpecialPointsA: this.props.data.playerSpecialPointsA,
                playerTerrorPointsA: this.props.data.playerTerrorPointsA,
            }
        })
    }

    enterHouse() {
        this.setState({
            text: 'House is locked for now...'
        })
    }

    async checkMysteriousFlower() {

        // console.log(this.state.player1);

        this.setState({
            text: <p>The mysterious flower releases a spirit shock when you try to touch it, you receive<strong className="damage-text"> 5 damage and 5 terror</strong>.</p>
        })

        let flowerDamage = this.props.data.playerHitPointsA - 5;
        let flowerTerror = this.props.data.playerTerrorPointsA + 5;

        await this.setState({
            player1: {
                playerLevelA: this.state.player1.playerLevelA,
                playerHitPointsA: flowerDamage,
                playerSpecialPointsA: this.state.player1.playerSpecialPointsA,
                playerTerrorPointsA: flowerTerror,
            }
        })

        console.log(this.state.player1);

        this.props.statUpdate(this.state.player1);
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