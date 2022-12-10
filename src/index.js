import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, HashRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/rootReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

let persistor = persistStore(store)
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

const app = (
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter>
                <App/>
            </HashRouter>
        </React.StrictMode>
    </Provider>
    </PersistGate>
)

render(app, document.getElementById('root')
);

