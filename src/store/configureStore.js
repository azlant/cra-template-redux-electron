import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../modules/reducers.js';
import { routerMiddleware, routerReducer } from 'react-router-redux';

//import { browserHistory } from 'react-router';
const createHistory = require("history").createBrowserHistory;

const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history);

const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware,
    createLogger()
  ),

  window.devToolsExtension ? window.devToolsExtension() : f => f

)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);

    //reduxRouterMiddleware.listenForReplays(store);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
        module.hot.accept('../modules/reducers', () => {
            const nextRootReducer = require('../modules/reducers.js');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
