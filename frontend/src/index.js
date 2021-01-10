import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import "./index.css";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import actions from './actions';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,composeWithDevTools(
 // applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector("#root"));
