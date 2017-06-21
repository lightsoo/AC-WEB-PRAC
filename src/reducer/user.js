import {FETCH_USER} from '../action/index';



function fetchUser(state='', action) {
    switch (action.type) {
        case FETCH_USER:
            return state;
        default:
            return state;
    }
}