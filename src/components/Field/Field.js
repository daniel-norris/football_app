import React, { Component } from 'react';

class Field extends Component {

    render() {

        const { game, loaded } = this.props;

        return !loaded ? null : (
            <div className="field__teams">

                <a id="attribution" href="https://www.vecteezy.com/free-vector/football-field">Football Field Vectors by Vecteezy</a>

                { game['team_1'].players.map((player, index) => (
                    // iterating over players to create n markers with player initials
                    <div key={ index } className={`player__marker${index + 1}`}>
                        { player.first_name[0] }. { player.last_name[0] }.
                    </div>
                ))}
                { game['team_2'].players.map((player, index) => (
                    // iterating over players to create n markers with player initials
                    <div key={ index } className={`player2__marker${index + 1}`}>
                        { player.first_name[0] }. { player.last_name[0] }.
                    </div>
                ))}
            </div>
        )
    }
}

export default Field;