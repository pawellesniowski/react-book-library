import React from 'react';
import { render } from 'react-dom';

import {App} from './components/App';

import {rootReducer} from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';



render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>
        ,
    document.getElementById('root')
);
