import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Landing from './Landing/Landing';
import Players from './Players/index';
import Teams from './Teams/Teams';

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


            <p>404. No page found.</p>

            </Switch>

        </Router>
    )
}

export default App;
