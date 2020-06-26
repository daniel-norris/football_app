import React, { Component } from 'react';

class Randomise extends Component {

    componentDidMount() {

        this.props.handleGameUpdate(this.props.id);
    }

    render() {

        const { team1, team2, game } = this.props;

        return(
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
                            { team1.length === 0 ? <tr><td colspan="5">No players to display</td></tr> : (
                                team1.map((player, index) => (
                                    <tr key={ index }>
                                        <td>{ player.first }</td>
                                        <td>{ player.last }</td>
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
                            { team2.length === 0 ? <tr><td colspan="5">No players to display</td></tr> : (
                                team2.map((player, index) => (
                                    <tr key={ index }>
                                        <td>{ player.first }</td>
                                        <td>{ player.last }</td>
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