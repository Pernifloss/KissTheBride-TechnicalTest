import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import Root from './containers/Root'
import rootReducer from './reducers';
import {routerMiddleware, routerActions} from 'react-router-redux';

import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createHashHistory} from 'history';
import APIClient from "./api/apiClient";

const history = createHashHistory();
function configureStore() {
    // Redux Configuration
    const middleware = [];
    const enhancers = [];
    const apiClient = new APIClient('https://test-recrutement.loyaltyexpert.net');
    // Thunk Middleware
    middleware.push(thunk.withExtraArgument(apiClient));

    // Logging Middleware
    const logger = createLogger({
        level: 'info',
        collapsed: true
    });
    middleware.push(logger);

    // Router Middleware
    const router = routerMiddleware(history);
    middleware.push(router);

    // Redux DevTools Configuration
    const actionCreators = {};
    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
            actionCreators,
        })
        : compose;
    /* eslint-enable no-underscore-dangle */

    // Apply Middleware & Compose Enhancers
    enhancers.push(applyMiddleware(...middleware));
    const enhancer = composeEnhancers(...enhancers);

    // Create Store
    const store = createStore(rootReducer, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers')) // eslint-disable-line global-require
        );
    }

    return store;
}
const store = configureStore();
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root history={history}/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Root)

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        render(Root)
    })
}
