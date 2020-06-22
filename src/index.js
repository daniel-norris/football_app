import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';

// import redux
import { createStore, applyMiddleware, compose } from 'redux';

// import redux components
import reducer from './data/reducer';
import initial from './data/initial';

// import react-redux connector
import { Provider } from 'react-redux';

// import thunk middleware for dispatching api requests
import thunk from 'redux-thunk';

// setup for middleware localstorage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk)) // remove localstorage and use thunk by passing through applymiddleware
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
