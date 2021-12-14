import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
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

const app = (
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App/>
            </Router>
        </React.StrictMode>
    </Provider>
    </PersistGate>
)

render(app, document.getElementById('root')
);
