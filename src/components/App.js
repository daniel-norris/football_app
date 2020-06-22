import React from 'react';

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import history from '../history';

const App = () => {
    return (
        <Router history={history}>
            <Switch>

                <Route exact path="/">
                    <h1>Hello!</h1>
                </Route>

            <p>404. No page found.</p>

            </Switch>

        </Router>
    )
}

export default App;
