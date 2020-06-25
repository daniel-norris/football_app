import React, { Component } from 'react';

class Field extends Component {

    render() {

        const { team1, team2 } = this.props;

        return(
            <div className="field__teams">
                { team1.map((player, index) => (
                    <div key={ index } className={`player__marker${index + 1}`}>{ player.first[0].toUpperCase() }. { player.last[0].toUpperCase() }.</div>
                ))}

                { team2.map((player, index) => (
                    <div key={ index } className={`player2__marker${index + 1}`}>{ player.first[0].toUpperCase() }. { player.last[0].toUpperCase() }.</div>
                ))}

            </div>
        )
    }
}

export default Field;