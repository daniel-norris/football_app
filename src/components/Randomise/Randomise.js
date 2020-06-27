import React, { Component } from 'react';

class Randomise extends Component {

    componentDidMount() {
        if(!this.props.loaded && !this.props.uploaded) {
            this.props.handleGameUpdate(this.props.id);
        }
    }

    render() {

        const { game, loaded } = this.props;

        return !loaded ? <p className="display-5">Loading...</p> : (
            <>
                <main >
                    <section className="randomise__section">
                        <div className="flex">
                            <h1 className="display-5 randomise__title">{ game['team_1'].name } - </h1>
                            <p className="display-5">{ game['team_1'].winChance * 100 }%</p>
                            { (game.winner === 3 || game.winner === 1) ? (
                                <img className="icon-med" alt="" src={require("../../assets/icons/trophy-solid.svg")}/>
                            ) : null }
                        </div>
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
                    </section>
                    <section className="randomise__section">
                        <div className="flex">
                            <h1 className="display-5 randomise__title">{ game['team_2'].name } - </h1>
                            <p className="display-5">{ game['team_2'].winChance * 100 }%</p>
                            { (game.winner === 3 || game.winner === 2) ? (
                                <img className="icon-med" alt="" src={require("../../assets/icons/trophy-solid.svg")}/>
                            ) : null }
                        </div>
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
                    </section>
                </main>

            </>
        )
    }

}

export default Randomise;