import React from 'react';
import './css/Choice.css';

class Choice extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            player1: {
                playerLevelA: 0,
                playerHitPointsA: 0,
                playerSpecialPointsA: 0,
                playerTerrorPointsA: 0,
            },
            essence: 0,
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
        console.log('update');

        this.setState({
            player1: {
                playerLevelA: this.props.data.player1.playerLevelA,
                playerHitPointsA: this.props.data.player1.playerHitPointsA,
                playerSpecialPointsA: this.props.data.player1.playerSpecialPointsA,
                playerTerrorPointsA: this.props.data.player1.playerTerrorPointsA,
            }
        })
    }

    enterHouse() {
        this.setState({
            text: 'House is locked for now...'
        })
    }

    async checkMysteriousFlower() {
        await this.update();
        // console.log(this.state.player1);

        this.setState({
            text: <p>The mysterious flower releases a spirit shock when you try to touch it, you receive <strong className="damage-text"> -5 damage and +5 terror</strong>.</p>
        })

        let flowerDamage = this.props.data.player1.playerHitPointsA - 5;
        let flowerTerror = this.props.data.player1.playerTerrorPointsA + 5;

        this.setState({
            player1: {
                playerLevelA: this.state.player1.playerLevelA,
                playerHitPointsA: flowerDamage,
                playerSpecialPointsA: this.state.player1.playerSpecialPointsA,
                playerTerrorPointsA: flowerTerror,
            }
        })

        console.log('player: ' + this.state.player1);

        this.props.statUpdate(this.state.player1);
    }

    async checkMailbox() {
        await this.setState({
            text: 'You check the mailbox and find 100 Essense.',
            essence: 100,
        })

        this.props.essenceUpdate(this.state.essence);
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