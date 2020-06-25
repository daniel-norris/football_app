import React, { Component } from 'react';

class Randomise extends Component {

    componentDidMount() {
        this.props.handleGameUpdate();
    }

    render() {

        const { team1, team2 } = this.props;

        return(
            <>
                <div>
                    <h1 className="display-5 randomise__title">Team 1</h1>
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
                            { team1.length === 0 ? <tr><td>No players to display</td></tr> : (
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

                    <h1 className="display-5 randomise__title">Team 2</h1>
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
                            { team2.length === 0 ? <tr><td>No players to display</td></tr> : (
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