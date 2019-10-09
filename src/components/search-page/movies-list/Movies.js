import React from 'react';
import Movie from "./Movie";
import PropTypes from 'prop-types';

import '../../../styles/search-page/movies.css';

/**
 * functional component to render a list of <Movie>, passed as prop from Container component
 */
const Movies = React.forwardRef((props, ref) =>
    <div ref={ref} className="movies-container">
        {props.movies.map(
            movie => <Movie key={movie.imdbID} movie={movie} movieClicked={props.movieClicked}/>)}
    </div>);

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    movieClicked: PropTypes.func.isRequired //prop drilling
};

Movies.defaultProps = {};


export default Movies;