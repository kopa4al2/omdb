import axios from 'axios';

export const REQUEST_SEARCH = 'request_search';
export const SEARCH_FINISHED = 'search_finished';
export const SEARCH_SINGLE_STARTED = 'request_single_started';
export const SEARCH_SINGLE_ENDED = 'request_single_finished';

const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = 'bcb1b6a3';
const URL_WITH_KEY = BASE_URL + "?apikey=" + API_KEY;

function requestSearch() {
    return {
        type: REQUEST_SEARCH,

    }
}

function searchFinished({data}) {
    return {
        type: SEARCH_FINISHED,
        payload: {
            isSuccessful: data["Response"],
            errorMessage:data["Error"],
            totalResults: data["totalResults"],
            movies: data["Search"]
        }
    }
}


function requestSingleMovie() {

    return {
        type: SEARCH_SINGLE_STARTED,
        isLoading: true
    };
}

function foundSingleMovie(resp) {

    return {
        type: SEARCH_SINGLE_ENDED,
        isLoading: false,
        data: resp.data
    };
}

export const fetchMovies = searchQuery => dispatch => {

    dispatch(requestSearch());

    axios.get(URL_WITH_KEY + searchQuery)
        .then(resp => {
            dispatch(searchFinished(resp))
        });

};

export const fetchSingleMovie = movieId => dispatch => {
    dispatch(requestSingleMovie(movieId));

    axios.get(URL_WITH_KEY + "&i=" + movieId)
        .then(resp => {
            dispatch(foundSingleMovie(resp))
        })
};
