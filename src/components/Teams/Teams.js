import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { squad1: "", squad2: "" };
        this.handleSquadSubmit = this.handleSquadSubmit.bind(this);
        this.handleSquad1NameChange = this.handleSquad1NameChange.bind(this);
        this.handleSquad2NameChange = this.handleSquad2NameChange.bind(this);
    }

    handleSquadSubmit(e) {
        e.preventDefault();

    }

    handleSquad1NameChange(e) {
        this.setState({ squad1: e.currentTarget.value });
    }

    handleSquad2NameChange(e) {
        this.setState({ squad2: e.currentTarget.value });
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


                </form>

                <Link to="/players">
                    <button onSubmit={ (e) => this.handleSquadSubmit(e) } className="btn">Confirm</button>
                </Link>
            </>
        )
    }


}

export default Teams;