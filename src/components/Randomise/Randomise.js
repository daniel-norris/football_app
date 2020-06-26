import React, { Component } from 'react';

class Randomise extends Component {

    componentDidMount() {
        this.props.handleGameUpdate(this.props.id);
    }

    render() {

        const { team1, team2, game, loaded, id } = this.props;

        return !loaded ? <p className="display-5">Loading...</p> : (
            <>
                <div>
                    <h1 className="display-5 randomise__title">Team: { game['team_1'].name }</h1>
                    <table className="randomise__table">
                        <thead className="randomise__table-header">
                            <tr className="b-text-3">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Skill</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody className="randomise__table-body">
                            { game['team_1'].players.length === 0 ? <tr><td colspan="5">No players to display</td></tr> : (
                                game['team_1'].players.map((player, index) => (
                                    <tr key={ index }>
                                        <td>{ player.first_name }</td>
                                        <td>{ player.last_name }</td>
                                        <td>{ player.age }</td>
                                        <td>{ player.skill }</td>
                                        <td>{ player.position }</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    <h1 className="display-5 randomise__title">Team: { game['team_2'].name }</h1>
                    <table className="randomise__table">
                        <thead className="randomise__table-header">
                            <tr className="b-text-3">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Skill</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody className="randomise__table-body">
                            { game['team_2'].players.length === 0 ? <tr><td colspan="5">No players to display</td></tr> : (
                                game['team_2'].players.map((player, index) => (
                                    <tr key={ index }>
                                        <td>{ player.first_name }</td>
                                        <td>{ player.last_name }</td>
                                        <td>{ player.age }</td>
                                        <td>{ player.skill }</td>
                                        <td>{ player.position }</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}

export default Randomise;