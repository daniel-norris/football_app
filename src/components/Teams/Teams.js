import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return(
            <>
                <div className="flex">
                    <form>
                        <label htmlFor="squad1">Squad 1</label>
                        <input type="text" id="squad1" name="squad1"></input>

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

                        <button>Confirm</button>

                    </form>
                    <form>
                        <label htmlFor="squad2">Squad 2</label>
                        <input type="text" id="squad2" name="squad2"></input>

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
                        <button>Confirm</button>

                    </form>


                </div>

                <Link to="/players">
                    <button className="btn">Confirm</button>
                </Link>
            </>
        )
    }


}

export default Teams;