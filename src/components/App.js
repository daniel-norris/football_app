import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Landing from './Landing/Landing';
import Players from './Players/index.js';
import Teams from './Teams/index.js';
import Randomise from './Randomise/index.js';
import Footer from './Footer/Footer';

import history from '../history';

const App = () => {
    return (
        <Router history={history}>

            <header className="header">
                <h1 className="logo">Foo Draft</h1>
            </header>

            <div className="container">

                <Switch>
                    <Route exact path="/">
                        <img className="field__landing" alt="" src={require("../assets/images/SVG/pitch2-side.svg")}/>
                        <Landing />
                    </Route>

                    <Route exact path="/teams">
                        <Teams />
                        <img alt="" src={require("../assets/images/SVG/pitch2.svg")}/>
                    </Route>

                    <Route exact path="/players">
                        <Players />
                    </Route>

                    <Route exact path="/randomise">
                        <Randomise />
                    </Route>

                <p>404. No page found.</p>

                </Switch>

                <Footer />

            </div>


        </Router>
    )
}

export default App;
