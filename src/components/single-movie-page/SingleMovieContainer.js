import React, {Component} from 'react';
import SingleMovie from "./SingleMovie";
import Loading from "../HOC/Loading";
import {fetchSingleMovie} from "../../actions/searchActions";
import {connect} from "react-redux";
import Errorable from "../HOC/Errorable";

class SingleMovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            isLoading: false,
            errorText: ""
        };

        this.loadableSingleMovie = Loading(SingleMovie);
        this.errorableAndLoadable = Errorable(this.loadableSingleMovie);
    }

    componentDidMount() {
        this.movieId = this.props.match.params.id;
        this.props.dispatch(fetchSingleMovie(this.movieId));
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        return nextProps !== currentState ? nextProps : null;
    }

    render() {
        let SingleMovie = this.errorableAndLoadable;
        return (
            <SingleMovie
                errorMessage={this.state.errorText}
                movie={this.state.movie}
                isLoading={this.state.isLoading}/>
        )
    }
}

SingleMovieContainer.propTypes = {};

SingleMovieContainer.defaultProps = {};

const mapStateToProps = ({singleMovieReducer}) => {
    const {data, isLoading} = singleMovieReducer;

    return {
        isLoading: isLoading,
        movie: data,
        errorText: data.Error
    }
};
export default connect(mapStateToProps)(SingleMovieContainer);