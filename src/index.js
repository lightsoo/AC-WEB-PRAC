import React from 'react';
import ReactDOM from 'react-dom';

//component...
import App from './components/App';
import User from './components/User';
import Admin from './pages/SiteAdmin/AdminLayoutPage';
import AdminNoticeList from './pages/SiteAdmin/Notice/NoticeListPage';

import registerServiceWorker from './registerServiceWorker';

import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

let store = createStore(rootReducer);

ReactDOM.render(
    //root의 dom을 유지한채로 Routing...
    <Provider store={store}>
        <Router history={browserHistory}>

            <Route path="/admin" component={Admin} >
                {/*여기서 /notice로 했을때 아래와 같은 path가 설정 되야된다고 생각이 드는데...안된다...뭐지*/}
                <Route path="notice" component={AdminNoticeList}/>
                {/*<Route path="/admin/admins" component={}>*/}
            </Route>

            <Route path="/login" component={App}>
                <Route path="user" component={User}>
                    <Route path=":id" component=""/>
                </Route>
                <Route path="b" component={User}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

//렌더하는 부분은 하나의 컴포넌트만 리턴할수있다.
//Router로 다른 router들을 wrapping