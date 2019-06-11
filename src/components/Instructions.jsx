import React from 'react';

class Instructions extends React.Component {

    goBack() {
        window.location.reload();
    }

    render() {
        return (
            <div id="instructions">
                <div className="instruction-title">
                    Instructions
                </div>
                <div>
                    <div className="instruction-text">
                        <div>
                            This is where instructions will appear.
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <div>
                            ...
                    </div>
                        <button onClick={() => this.goBack()} className="titlescreen-back">Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructions;