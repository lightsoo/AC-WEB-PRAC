import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import User from './components/User';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

let store = createStore(rootReducer);

ReactDOM.render(
    //root의 dom을 유지한채로 Routing...
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/user" component={User}>
                    <Route path="/:id" component=""/>
                </Route>
                <Route path="/b" component={User}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();


//렌더하는 부분은 하나의 컴포넌트만 리턴할수있다.
//Router로 다른 router들을 wrapping
//