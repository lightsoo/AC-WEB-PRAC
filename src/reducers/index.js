import {combineReducers} from 'redux';
// import user from './user'

function user(state = '', action) {
    switch (action.type){
        case 'FETCH_USER' :
            // console.log('FETCH_USER');
            // console.log(action);
            return action.payload;

        case 'SAVE_USER':
            // console.log('SAVE_FETCH');
            return action.payload;
        default :
            return state;
    }
}

//state
const rootReducer = combineReducers({
    // user : user
    user
});

export default rootReducer;
