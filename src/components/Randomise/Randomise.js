import React, { Component } from 'react';

class Randomise extends Component {

    componentDidMount() {
        this.props.handlePlayerLoad();
    }

    render() {

        const { players } = this.props;

        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Skill</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        { players.length === 0 ? <tr><td>No players to display</td></tr> : (
                            players.map((player, index) => (
                                <tr key={ index }>
                                    <td>{ player.first }</td>
                                    <td>{ player.last }</td>
                                    <td>{ player.age }</td>
                                    <td></td>
                                    <td>{ player.skill }</td>
                                    <td>{ player.position }</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </>
        )
    }

}

export default Randomise;