import React, { Component } from 'react';
import Roster from '../Roster/Roster';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { first: "", last: "", age: "", skill: 0, position: "" }
        this.handleCreatePlayer = this.handleCreatePlayer.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleRandomise = this.handleRandomise.bind(this);
    }

    handleFirstNameChange(e) {
        this.setState({ first: e.currentTarget.value })
    }

    handleLastNameChange(e) {
        this.setState({ last: e.currentTarget.value })
    }

    handleAgeChange(e) {
        this.setState({ age: e.currentTarget.value })
    }

    handleSkillChange(e) {
        this.setState({ skill: e.currentTarget.value })
    }

    handlePositionChange(e) {
        this.setState({ position: e.currentTarget.value })
    }

    handleCreatePlayer(e) {
        e.preventDefault();
        const { players, game } = this.props;
        if(players.length < game.players_per_side * 2) {
            this.props.handleCreatePlayer(this.state);
        }
    }

    handleRandomise(e) {
        e.preventDefault();
        const { players, game } = this.props;
        if(players.length === game.players_per_side * 2) {
            this.props.handleRandomise();
            this.props.handlePlayerUpload();
        }
    }

    render() {

        const { players, game } = this.props;

        return (
            <>
                <form
                    className="players__wrapper"
                    >

                    <h1 className="display-5 players__title">Create your players</h1>

                    <label className="b-text-3">Player first name</label>
                    <input
                        onChange={ (e) => this.handleFirstNameChange(e) }
                        type="text"
                        placeholder="Player first name..."
                        value={ this.state.first }></input>

                    <label className="b-text-3">Player last name</label>
                    <input
                        onChange={ (e) => this.handleLastNameChange(e) }
                        type="text"
                        placeholder="Player last name..."
                        value={ this.state.last }></input>

                    <label className="b-text-3">Age</label>
                    <input
                        onChange={ (e) => this.handleAgeChange(e) }
                        type="number"
                        placeholder="Player age..."
                        value={ this.state.age }></input>

                    <p className="b-text-3">Skill</p>
                    <div className="players__skill">
                        <div className="flex column">
                            <label className="b-text-3 flex align-center" htmlFor="skill1">1
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </label>
                            <input type="radio" id="skill1" name="skill" value="1"
                                onChange={ (e) => this.handleSkillChange(e) }
                            />
                        </div>
                        <div className="flex column">
                            <label className="b-text-3 flex align-center" htmlFor="skill2">2
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </label>
                            <input type="radio" id="skill2" name="skill" value="2"
                                onChange={ (e) => this.handleSkillChange(e) }
                            />
                        </div>
                        <div className="flex column">
                            <label className="b-text-3 flex align-center" htmlFor="skill3">3
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </label>
                            <input type="radio" id="skill3" name="skill" value="3"
                                onChange={ (e) => this.handleSkillChange(e) }/>
                        </div>
                        <div className="flex column">
                            <label className="b-text-3 flex align-center" htmlFor="skill4">4
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </label>
                            <input type="radio" id="skill4" name="skill" value="4"
                                onChange={ (e) => this.handleSkillChange(e) }/>
                        </div>
                        <div className="flex column">
                            <label className="b-text-3 flex align-center" htmlFor="skill5">5
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </label>
                            <input type="radio" id="skill5" name="skill" value="5"
                                onChange={ (e) => this.handleSkillChange(e) }/>
                        </div>
                    </div>

                    <div className="players__position">
                        <label className="b-text-3" htmlFor="position">Position</label>
                        <select name="position" id="position" onChange={ (e) => this.handlePositionChange(e) }>
                            <option value="">Player position...</option>
                            <option value="Goalkeeper">Goalkeeper</option>
                            <option value="Midfielder">Midfielder</option>
                            <option value="Forward">Forward</option>
                        </select>
                    </div>

                    <div className="flex align-center">
                        <button onClick={ (e) => this.handleCreatePlayer(e) } className="players__create">
                            <img className="icon" alt="" src={require("../../assets/icons/plus-square-solid.svg")}/>
                            <p className="b-text-3">Create</p>
                        </button>

                        <p className="players__tally display-5">{ players.length } / { game.players_per_side * 2 }</p>

                    </div>

                    {/* <Roster players={ players }/> */}

                    <div>
                        <button onClick={ (e) => this.handleRandomise(e) } className="btn">Randomise</button>
                    </div>


                </form>

                <div className="field__teams">
                    {/**
                     * Creates an iterable object with a length property set to the size of players per side the user has selected. Avoids polluting the component namespace with an array just so that we can iterate over to create markers. Also checks to see if the size per team has exceeded the amount of markers we have or our validation rules.
                     *
                     */}
                    { game.players_per_side <= 9 ? (Array.from({length: game.players_per_side}, (item, index) =>
                        <div key={ index } className={`player__marker${index + 1}`}>P{ index + 1 }</div>
                        )) : null
                    }
                    { game.players_per_side <= 9 ? (Array.from({length: game.players_per_side}, (item, index) =>
                        <div key={ index } className={`player2__marker${index + 1}`}>P{ index + 1 }</div>
                        )) : null
                    }
                </div>
            </>
        )
    }
}


export default Players;