// import {FETCH_USER} from '../action/index';


export default function user(state = '', action) {
    switch (action.type){
        case 'FETCH_USER' :
            console.log('FETCH_USER');
            console.log(action);
            return action.payload;

        case 'SAVE_USER':
            console.log('SAVE_FETCH');
            return action.payload;
        default :
            return state;
    }
}