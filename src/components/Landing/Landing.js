import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <main className="landing">

        <section className="landing__feature">
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/check-double-solid.svg")}/>
                <div>
                    <h2 className="display-5">Draft</h2>
                    <p className="text-3">Draft your team names. Choose the max number of players per side.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/random-solid.svg")}/>
                <div>
                    <h2 className="display-5">Select</h2>
                    <p className="text-3">Create your team's player roster and attribute each player with a position, age and skill rating.</p>
                </div>
            </div>
            <div className="flex">
                <img className="landing__img" alt="" src={require("../../assets/icons/trophy-solid.svg")}/>
                <div>
                    <h2 className="display-5">Predict</h2>
                    <p className="text-3">Allow our algorithms to randomly assign your two team's player rosters and predict a winner.</p>
                </div>
            </div>
        </section>
        <div className="flex justify-center">
            <Link to="/draft">
                <button className="btn">Start</button>
            </Link>
        </div>
    </main>
);

export default Landing;




