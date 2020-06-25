import React, { Component } from 'react';

class Field extends Component {

    render() {


        return(
            <div className="field__teams">
                <div className="player__marker1"></div>
                <div className="player__marker2">P2</div>
                <div className="player__marker3">P3</div>
                <div className="player__marker4">P4</div>
                <div className="player__marker5">P5</div>
                <div className="player__marker6">P6</div>
            </div>
        )
    }
}

export default Field;