import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from "../../../actions/searchActions";
import QueryHolder from "../../../utils/QueryHolder";
import '../../../styles/search-page/search-bar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            year: ""
        };

        this.searchMovie = this.searchMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.selectYear = this.selectYear.bind(this);


        this.options = (() => {
            let options = [];
            for (let i = 2018; i >= 1950; i--) {
                options.push(<option key={i}>{i}</option>);
            }
            return options;
        })();
    }


    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        })
    }

    clearSearch() {
        this.setState({
            searchValue: "",
            year: ""
        })
    }


    selectYear(e) {
        if (this.state.year !== e.target.value)
            this.setState({year: e.target.value});

    }

    searchMovie() {
        let query = `&s=${this.state.searchValue || '""'}&y=${this.state.year}`;
        let currentPage = 1;
        QueryHolder.setCurrentQuery(query);
        //TODO: cache movies so we can get them back
        // this.props.history.push("/" + query, this.state);
        this.props.dispatch(fetchMovies(`${query}&page=${currentPage}`))
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    className="search-input"
                    onChange={this.handleChange}
                    value={this.state.searchValue}
                    type="search"/>
                <select className="sort-select" onChange={this.selectYear} value={this.state.year}>
                    <option defaultValue>ANY</option>
                    {this.options}
                </select>
                <button className="btn submit-btn" onClickCapture={this.searchMovie}>Search</button>
                <button className="btn clear-btn" onClickCapture={this.clearSearch}>Reset</button>
            </div>
        )
    }

}

SearchBar.propTypes = {
    history: PropTypes.object.isRequired
};

SearchBar.defaultProps = {};


export default connect()(SearchBar);