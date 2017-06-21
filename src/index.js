import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider }               from 'react-redux';
import {createStore} from 'redux';
import user from './reducer';

let store = createStore(user);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


registerServiceWorker();
