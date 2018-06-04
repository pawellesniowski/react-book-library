import {BOOK_SELECTED} from '../const';

// state in this function is not application state,
// but only the state this reducer is responsible for
export default function (state = {title: ""}, action) {
    switch(action.type){
        case BOOK_SELECTED:
            // return Object.assign({}, state, {
            //     activeBook: action.payload
            // });
            return action.payload;
        default:
            return state;
    }
}