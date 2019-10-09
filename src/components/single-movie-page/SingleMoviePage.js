import React, {Component} from 'react';
import SingleMovieContainer from "./SingleMovieContainer";
import '../../styles/single-movie-page/single-movie-page.css';

class SingleMoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.back = this.back.bind(this);
    }

    back() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="single-movie-page">
                <div className="go-back" onClickCapture={this.back}>Go back</div>
                <SingleMovieContainer {...this.props}/>
            </div>
        )
    }
}

SingleMoviePage.propTypes = {};

SingleMoviePage.defaultProps = {};


export default SingleMoviePage;