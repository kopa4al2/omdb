import React, {Component} from 'react';
import Movies from "./Movies";
import {connect} from "react-redux";
import Loading from "../../HOC/Loading";
import {fetchSingleMovie} from "../../../actions/searchActions";
import Errorable from "../../HOC/Errorable";

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: false,
            errorMessage: ""
        };
        this.fetchSingleMovie = this.fetchSingleMovie.bind(this);

        this.loadableMovies = Errorable(Movies);
        this.errorableAndLoadable = Loading(this.loadableMovies);
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        return nextProps !== currentState ? nextProps : null;
    }

    fetchSingleMovie(movieId) {
        //Redirect to the url
        this.props.history.push(`/movie/${movieId}`);

        this.props.dispatch(fetchSingleMovie(movieId));
    };


    render() {
        let Movies = this.errorableAndLoadable;
        return (
            <Movies
                errorMessage={this.state.errorMessage}
                isLoading={this.state.isLoading}
                movies={this.state.movies}
                movieClicked={this.fetchSingleMovie}
            />
        )
    }
}

MoviesContainer.propTypes = {};

MoviesContainer.defaultProps = {};

const mapStateToProps = ({search}) => {
    const {isLoading, data} = search;
    if (!data)
        return {
            isLoading: isLoading,
            movies: []
        };
    const movies = data.movies ? data.movies : [];

    return {
        isLoading: isLoading,
        movies: movies,
        isSuccessful: data.isSuccessful,
        errorMessage: data.errorMessage,
        totalResults: data.totalResults
    }
};
export default connect(mapStateToProps)(MoviesContainer);