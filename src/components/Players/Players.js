import React, { Component } from 'react';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { first: "", last: "", age: "", skill: 0, position: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleCreatePlayer(this.state);
    }

    render() {

        return (
            <>
                <main className="flex">

                    <section>
                        <h1>Create your players</h1>
                        <form
                            className="flex column"
                            onSubmit={ (e) => this.handleSubmit(e) }>

                            <label>Player first name</label>
                            <input
                                onChange={ (e) => this.handleFirstNameChange(e) }
                                type="text"
                                placeholder="Enter player first name..."
                                value={ this.state.first }></input>

                            <label>Player last name</label>
                            <input
                                onChange={ (e) => this.handleLastNameChange(e) }
                                type="text"
                                placeholder="Enter player last name..."
                                value={ this.state.last }></input>

                            <label>Age</label>
                            <input
                                onChange={ (e) => this.handleAgeChange(e) }
                                type="number"
                                placeholder="Enter player age..."
                                value={ this.state.age }></input>

                            <div className="flex">
                                <label htmlFor="skill1">1
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill1" name="skill" value="1"
                                    onChange={ (e) => this.handleSkillChange(e) }/>
                                <label htmlFor="skill2">2
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill2" name="skill" value="2"
                                    onChange={ (e) => this.handleSkillChange(e) }/>
                                <label htmlFor="skill3">3
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill3" name="skill" value="3"
                                    onChange={ (e) => this.handleSkillChange(e) }/>
                                <label htmlFor="skill4">4
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill4" name="skill" value="4"
                                    onChange={ (e) => this.handleSkillChange(e) }/>
                                <label htmlFor="skill5">5
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill5" name="skill" value="5"
                                    onChange={ (e) => this.handleSkillChange(e) }/>
                            </div>

                            <label htmlFor="position">Choose a position</label>
                            <select name="position" id="position" onChange={ (e) => this.handlePositionChange(e) }>
                                <option value="">-Please choose an option-</option>
                                <option value="goalkeeper">Goalkeeper</option>
                                <option value="midfielder">Midfielder</option>
                                <option value="forward">Forward</option>
                            </select>

                        <button>Confirm</button>
                        </form>

                    </section>

                    <section>
                        <h1>Player Roster</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </section>

                </main>
            </>
        )
    }
}


export default Players;