import React, { Component } from 'react';

class Field extends Component {

    render() {

        const { game, loaded } = this.props;

        return !loaded ? null : (
            <div className="field__teams">
                { game['team_1'].players.map((player, index) => (
                    <div key={ index } className={`player__marker${index + 1}`}>
                        { player.first_name[0] }. { player.last_name[0] }.
                    </div>
                ))}

                { game['team_2'].players.map((player, index) => (
                    <div key={ index } className={`player2__marker${index + 1}`}>
                        { player.first_name[0] }. { player.last_name[0] }.
                    </div>
                ))}

            </div>
        )
    }
}

export default Field;