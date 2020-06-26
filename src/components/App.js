import React from 'react';

import {
    Link,
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Landing from './Landing/Landing';
import Players from './Players/index.js';
import Teams from './Teams/index.js';
import Randomise from './Randomise/index.js';
import Footer from './Footer/Footer';
import Field from './Field/index.js';

import history from '../history';

const App = () => {
    return (
        <Router history={history}>

            <header className="header">
                <Link to="/">
                    <h1 className="logo">Foo<span className="logo__highlight">Draft</span></h1>
                </Link>
            </header>

            <div className="container">

                <Switch>
                    <Route exact path="/">
                        <div className="field__landing">
                            <div className="demo__marker1">P1</div>
                            <div className="demo__marker2">P2</div>
                            <div className="demo__marker3">P3</div>
                            <div className="demo__marker4">P4</div>
                            <div className="demo__marker5">P5</div>
                            <div className="demo__marker6">P6</div>
                        </div>
                        <Landing />
                    </Route>

                    <Route exact path="/draft">
                        <div className="teams__container">
                            <Teams/>
                            <div className="field__teams">
                                {/* <div className="player__marker1">P1</div>
                                <div className="player__marker2">P2</div>
                                <div className="player__marker3">P3</div>
                                <div className="player__marker4">P4</div>
                                <div className="player__marker5">P5</div>
                                <div className="player__marker6">P6</div> */}
                            </div>
                        </div>
                    </Route>

                    <Route exact path="/draft/players">
                        <div className="teams__container">
                            <Players/>
                            <div className="field__teams">
                                <div className="player__marker1">P1</div>
                                <div className="player__marker2">P2</div>
                                <div className="player__marker3">P3</div>
                                <div className="player__marker4">P4</div>
                                <div className="player__marker5">P5</div>
                                <div className="player__marker6">P6</div>
                                <div className="player2__marker1">P1</div>
                                <div className="player2__marker2">P2</div>
                                <div className="player2__marker3">P3</div>
                                <div className="player2__marker4">P4</div>
                                <div className="player2__marker5">P5</div>
                                <div className="player2__marker6">P6</div>
                            </div>
                        </div>
                    </Route>

                    <Route exact path="/draft/players/view">
                        <div className="teams__container">
                            <Randomise />
                            <Field />
                        </div>

                    </Route>

                <p>404. No page found.</p>

                </Switch>

                <Footer />

            </div>


        </Router>
    )
}

export default App;
