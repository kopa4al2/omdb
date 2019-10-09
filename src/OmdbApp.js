import React from 'react';
import {Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history';

import SearchPage from "./components/search-page/SearchPage";
import SingleMoviePage from "./components/single-movie-page/SingleMoviePage";
import './reset-css.css';
import './OmdbApp.css';

function OmdbApp() {
    return (
        <Router history={createBrowserHistory()}>
            <Route exact path={"/"} component={SearchPage}/>
            {/*<Route path={"/:query"} component={SearchPage}/>*/}
            <Route path={"/movie/:id"} component={SingleMoviePage}/>
        </Router>
    );
}

export default OmdbApp;


