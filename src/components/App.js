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

import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <Switch>

                <Route exact path="/">
                    <div className="container">
                        <Landing />
                    </div>
                </Route>

                <Route exact path="/teams">
                    <div className="container">
                        <Teams />
                    </div>
                </Route>

                <Route exact path="/players">
                    <div className="container">
                        <Players />
                    </div>
                </Route>

                <Route exact path="/randomise">
                    <div className="container">
                        <Randomise />
                    </div>
                </Route>

            <p>404. No page found.</p>

            </Switch>

        </Router>
    )
}

export default App;
