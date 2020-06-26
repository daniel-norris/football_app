import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { team_1: "", team_2: "", players_side: 6 };
        this.handleSquadSubmit = this.handleSquadSubmit.bind(this);
        this.handleSquad1NameChange = this.handleSquad1NameChange.bind(this);
        this.handleSquad2NameChange = this.handleSquad2NameChange.bind(this);
        this.handlePlayersPerSideChange = this.handlePlayersPerSideChange.bind(this);
    }

    handleSquadSubmit(e) {
        e.preventDefault();
        this.props.handleCreateTeams(this.state);
    }

    handleSquad1NameChange(e) {
        this.setState({ team_1: e.currentTarget.value });
    }

    handleSquad2NameChange(e) {
        this.setState({ team_2: e.currentTarget.value });
    }

    handlePlayersPerSideChange(e) {
        this.setState({ players_side: e.currentTarget.value })
    }

    render() {

        const { teams } = this.props;
        const { players_side } = this.state;

        return(
            <>
                <form>

                    <h1 className="teams__title display-5">Create your teams</h1>

                    <label className="b-text-3" htmlFor="squad1">Squad 1</label>
                    <input
                        onChange={ (e) => this.handleSquad1NameChange(e) }
                        type="text"
                        id="squad1"
                        name="squad1"
                        placeholder="Enter squad name...">
                    </input>

                    <label className="b-text-3" htmlFor="squad2">Squad 2</label>
                    <input
                        onChange={ (e) => this.handleSquad2NameChange(e) }
                        type="text"
                        id="squad2"
                        name="squad2"
                        placeholder="Enter squad name...">
                    </input>

                    <section className="flex column">
                        <label className="b-text-3">Players per side</label>
                        <input
                            onChange={ (e) => this.handlePlayersPerSideChange(e) }
                            type="number"
                            placeholder="Choose team size...">
                        </input>

                        <div>
                            <button
                                onClick={ (e) => this.handleSquadSubmit(e) }
                                className="btn teams__btn">Confirm
                            </button>
                        </div>
                    </section>
                </form>

                <div className="field__teams">
                    {/**
                     * Creates an iterable object with a length property set to the size of players per side the user has selected. Avoids polluting the component namespace with an array just so that we can iterate over to create markers. Also checks to see if the size per team has exceeded the amount of markers we have or our validation rules.
                     *
                     */}
                    { players_side <= 9 ? (Array.from({length: players_side}, (item, index) =>
                        <div key={ index } className={`player__marker${index + 1}`}>P{ index + 1 }</div>
                        )) : null
                    }
                </div>
            </>
        )
    }
}

export default Teams;