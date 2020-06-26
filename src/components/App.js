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
import Demo from './Demo/Demo';

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
                        <div className="content-wrap">
                            <Demo/>
                            <Landing />
                        </div>
                    </Route>

                    <Route exact path="/draft">
                        <div className="content-wrap">
                            <Teams/>
                        </div>
                    </Route>

                    <Route exact path="/draft/players">
                        <div className="content-wrap">
                            <div className="teams__container">
                                <Players/>
                            </div>
                        </div>
                    </Route>

                    <Route exact path="/draft/players/:id/view" render={({ match }) => (
                        <div className="content-wrap">
                            <div className="randomise__container">
                                <Field/>
                                <Randomise id={match.params.id}/>
                            </div>
                        </div>
                    )}>
                    </Route>

                <p>404. No page found.</p>

                </Switch>

                <Footer />

            </div>


        </Router>
    )
}

export default App;
