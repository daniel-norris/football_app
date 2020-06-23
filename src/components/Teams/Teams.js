import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { squad1: "", squad2: "", players_side: 5 };
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
        this.setState({ squad1: e.currentTarget.value });
    }

    handleSquad2NameChange(e) {
        this.setState({ squad2: e.currentTarget.value });
    }

    handlePlayersPerSideChange(e) {
        this.setState({ players_side: e.currentTarget.value })
    }

    render() {

        return(
            <>
                <form className="flex">

                    <div>
                        <label htmlFor="squad1">Squad 1</label>
                        <input
                            onChange={ (e) => this.handleSquad1NameChange(e) }
                            type="text"
                            id="squad1"
                            name="squad1"></input>

                        <div>
                            <label htmlFor="kit1">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="kit1" name="kit" value="1"/>
                            <label htmlFor="kit2">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="kit2" name="kit" value="2"/>
                            <label htmlFor="kit3">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="kit3" name="kit" value="3"/>
                        </div>

                    </div>

                    <div>

                        <label htmlFor="squad2">Squad 2</label>
                        <input
                            onChange={ (e) => this.handleSquad2NameChange(e) }
                            type="text"
                            id="squad2"
                            name="squad2"></input>

                        <div>
                            <label htmlFor="t2kit1">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="t2kit1" name="kit" value="1"/>
                            <label htmlFor="t2kit2">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="t2kit2" name="kit" value="2"/>
                            <label htmlFor="t2kit3">
                                <img className="icon-lg" alt="" src={require("../../assets/icons/soccer.svg")}/>
                            </label>
                            <input type="radio" id="t2kit3" name="kit" value="3"/>
                        </div>
                    </div>

                </form>

                <section className="flex column">
                    <label>Players per side</label>
                    <input onChange={ (e) => this.handlePlayersPerSideChange(e) } type="number" placeholder="5"></input>

                    <Link to="/players">
                        <button onClick={ (e) => this.handleSquadSubmit(e) } className="btn">Confirm</button>
                    </Link>
                </section>

            </>
        )
    }
}

export default Teams;