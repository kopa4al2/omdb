import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/search-page/movie.css';

const Movie = (props) => {
    return (<div className="single-movie" onClickCapture={() => props.movieClicked(props.movie.imdbID)}>
        <img className="movie-poster"
             src={props.movie.Poster === 'N/A' ?
                 "https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg"
                 :
                 props.movie.Poster
             }
             alt="poster"/>
        <h3 className="movie-title">{props.movie.Title}</h3>
        <p className="movie-year">{props.movie.Year}</p>
    </div>);
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Type: PropTypes.string,
        Year: PropTypes.string,
        imdbID: PropTypes.string
    }).isRequired,
    movieClicked: PropTypes.func.isRequired
};

Movie.defaultProps = {};


export default Movie;