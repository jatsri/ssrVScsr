import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import createStore from './redux/store'
import App from './components/App'

const state = window.__STATE__;
delete window.__STATE__;

const store = createStore(state);

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
    <Provider store={store} >
        <App />
    </Provider>,
    document.querySelector('#app')
);
