import React, { Component } from 'react';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = { player: { name: "", skill: 0, position: "" } }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {

    }

    handleSubmit() {
        console.log("submitted");
    }

    render() {

        return (
            <>
                <main className="flex">

                    <section>
                        <h1>Create your players</h1>
                        <form
                            className="flex column"
                            onSubmit={ this.handleSubmit }>

                            <label>Player name</label>
                            <input onChange={ () => this.handleNameChange } type="text" placeholder="Enter a player name..."></input>

                            <div className="flex">
                                <label htmlFor="skill1">1
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill1" name="skill" value="1" />
                                <label htmlFor="skill2">2
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill2" name="skill" value="2" />
                                <label htmlFor="skill3">3
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill3" name="skill" value="3" />
                                <label htmlFor="skill4">4
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill4" name="skill" value="4" />
                                <label htmlFor="skill5">5
                                    <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                                </label>
                                <input type="radio" id="skill5" name="skill" value="5" />
                            </div>

                            <label htmlFor="position">Choose a position</label>
                            <select name="position" id="position">
                                <option value="">-Please choose an option-</option>
                                <option value="goalkeeper">Goalkeeper</option>
                                <option value="midfielder">Midfielder</option>
                                <option value="forward">Forward</option>
                            </select>

                        </form>
                    </section>

                    <section>
                        <h1>Player Roster</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </section>

                </main>
                <button>Confirm</button>
            </>
        )
    }
}


export default Players;