import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/single-movie-page/single-movie.css';

const SingleMovie = React.forwardRef((props, ref) => {
    const movies = (() => {
        const {movie} = props;
        if (!movie) return;

        //Delete properties i wont render
        delete movie.Ratings;
        delete movie.Response;

        let rows = [];
        for (let movieKey in movie) {
            //TODO: maybe this is not the required behavior
            if (movie[movieKey] === 'N/A' || movieKey === 'Poster')
                continue; //Dont write N/A props

            if (movie.hasOwnProperty(movieKey)) {
                rows.push(
                    <div key={movieKey}
                         className={`property-row ${movieKey === 'Title' ? "title" : ""}`}>
                    <span className="movie-property">
                        {movieKey === 'Title' ? "" : movieKey + ":"}
                    </span>

                        {movie[movieKey]}
                    </div>
                )
            }

        }
        return rows;
    })();

    return (<div className="single-movie-description" ref={ref}>
        <div className="image">
            <img src={props.movie.Poster === 'N/A' ?
                "https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg"
                :
                props.movie.Poster} alt="poster"/>
        </div>
        <div className="movie-properties">
            {movies}
        </div>
    </div>)

});

SingleMovie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Released: PropTypes.string,
        Director: PropTypes.string,
        imdbRating: PropTypes.string,
        Country: PropTypes.string,
        Rated: PropTypes.string,
        Runtime: PropTypes.string,
        Genre: PropTypes.string,
        Writer: PropTypes.string,
        Actors: PropTypes.string,
        Language: PropTypes.string,
        Awards: PropTypes.string,
        Poster: PropTypes.string,
        Ratings: PropTypes.arrayOf(PropTypes.shape({
            Source: PropTypes.string,
            Value: PropTypes.string
        })),
        Metascore: PropTypes.string,
        imdbVotes: PropTypes.string,
        imdbID: PropTypes.string,
        Type: PropTypes.string,
        DVD: PropTypes.string,
        BoxOffice: PropTypes.string,
        Production: PropTypes.string,
        Website: PropTypes.string,
        Response: PropTypes.string
    }).isRequired
};

SingleMovie.defaultProps = {};


export default SingleMovie;

