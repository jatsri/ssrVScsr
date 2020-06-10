import React from 'react'
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import createStore from './redux/store';


module.exports = function render(initialState) {
    // Create store
    const store = createStore(initialState);

    let content = renderToString(
        <Provider store={store} >
            <div> Hello World </div>
        </Provider>
    );

    // Get the initial state using getState()
    const preloadedState = store.getState();

    return {content, preloadedState};
};
