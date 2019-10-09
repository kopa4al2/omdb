import {REQUEST_SEARCH, SEARCH_FINISHED, SEARCH_SINGLE_ENDED, SEARCH_SINGLE_STARTED} from "../actions/searchActions";
import {combineReducers} from "redux";

const search = (state = {
    isLoading: false,
    data: {}
}, action) => {
    switch (action.type) {
        case REQUEST_SEARCH: {
            return {
                isLoading: true,
                data: state.data
            };
        }
        case SEARCH_FINISHED: {
            return {
                data: action.payload,
                isLoading: false
            }
        }
        default:
            return state
    }
};

const singleMovieReducer = (state = {
    isLoading: true,
    data: {}
}, action) => {
    switch (action.type) {
        case SEARCH_SINGLE_STARTED : {
            return {
                isLoading: true,
                data: state.data
            }
        }
        case SEARCH_SINGLE_ENDED : {
            return {
                data: action.data,
                isLoading: false
            }
        }
        default:
            return state
    }
};


export default combineReducers({search, singleMovieReducer});