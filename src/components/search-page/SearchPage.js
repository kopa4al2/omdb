import React, {Component} from 'react';
import SearchBar from "./search/SearchBar";

import '../../styles/search-page/search-page.css';
import MoviesContainer from "./movies-list/MoviesContainer";
import PaginationContainer from "./pagination/PaginationContainer";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <SearchBar {...this.props}/>
                <MoviesContainer {...this.props}/>
                <PaginationContainer {...this.props}/>
            </div>
        )
    }
}

SearchPage.propTypes = {};

SearchPage.defaultProps = {};


export default SearchPage;