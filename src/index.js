import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


registerServiceWorker();
