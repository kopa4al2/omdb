import React, {Component} from 'react';
import {connect} from "react-redux";
import Pagination from "./Pagination";
import {fetchMovies} from "../../../actions/searchActions";
import QueryHolder from "../../../utils/QueryHolder";

const MOVIES_PER_PAGE = 10;

class PaginationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 0
        };

        this.pageClicked = this.pageClicked.bind(this);
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        if (nextProps.totalPages !== currentState.totalPages)
            return {currentPage: 1, ...nextProps};

        return nextProps !== currentState ? nextProps : null;
    }

    pageClicked(page) {
        if (this.state.currentPage !== page) {
            this.props.dispatch(fetchMovies(QueryHolder.getCurrentQuery() + "&page=" + page));
            this.setState({
                currentPage: page
            });
        }
    }

    render() {
        return (
            <Pagination
                currentPage={this.state.currentPage}
                totalPages={this.state.totalPages}
                pageClicked={this.pageClicked}
            />
        );
    }
}

PaginationContainer.propTypes = {};

PaginationContainer.defaultProps = {};

const mapStateToProps = ({search}) => {
    const {data} = search;
    return {
        totalPages: data.errorMessage ? 0 : Math.ceil(Number(data.totalResults) / MOVIES_PER_PAGE) || 0,
    }
};

export default connect(mapStateToProps)(PaginationContainer);