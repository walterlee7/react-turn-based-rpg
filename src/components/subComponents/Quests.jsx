import React from 'react';
import '../css/Quests.css';

export default class Quests extends React.Component {
    render() {
        return (
            <div className="quest">
                <button className="questButton">
                    Main Quest
                </button>
                <button className="questButton">
                    Side Quest
                </button>
            </div>
        )
    }
}