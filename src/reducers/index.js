/*액션이 트리거 되면서 명령을 받아 기존의 상태를 새로운 상태로 변경하는 일을 한다*/

import {combineReducers} from 'redux';

function user(previousState = '', action) {
    switch (action.type){
        case 'FETCH_USER' :
            return action.payload;
        case 'SAVE_USER':
            return action.payload;
        default :
            return previousState;
    }
}

function notice(previousState= '', action) {
    // console.log('notice previousState: ', previousState);
    switch (action.type){
        case 'SEARCH_NOTICE':
            console.log('Reducers!!! SEARCH_NOTICE: ', action);
            return action.payload;
        case 'SEARCH_NOTICE_BY_TEXT':
            console.log('Reducers!!! SEARCH_NOTICE_BY_TEXT 액션값: ', action);
            return action.payload;
        default :
            return previousState;
    }
}

//state,
const rootReducer = combineReducers({
    user,
    notice
});

export default rootReducer;
