(this.webpackJsonpimdb=this.webpackJsonpimdb||[]).push([[0],{40:function(e,t,a){e.exports=a(87)},45:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(18),s=a.n(i),c=(a(45),a(37)),o=a(17),l=a(11),u=a(2),p=a(3),d=a(5),m=a(4),h=a(6),v=a(8),f=a(14),g=a(24),b=a.n(g),y="request_search",O="search_finished",j="request_single_started",E="request_single_finished",k="https://www.omdbapi.com/?apikey=bcb1b6a3";var P=function(e){return function(t){t({type:y}),b.a.get(k+e).then((function(e){t(function(e){var t=e.data;return{type:O,payload:{isSuccessful:t.Response,errorMessage:t.Error,totalResults:t.totalResults,movies:t.Search}}}(e))}))}},C=function(e){return function(t){t({type:j,isLoading:!0}),b.a.get(k+"&i="+e).then((function(e){t(function(e){return{type:E,isLoading:!1,data:e.data}}(e))}))}},w=function(){var e="";return{getCurrentQuery:function(){return e},setCurrentQuery:function(t){return e=t}}}(),N=(a(67),a(68),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={searchValue:"",year:""},a.searchMovie=a.searchMovie.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.clearSearch=a.clearSearch.bind(Object(v.a)(a)),a.selectYear=a.selectYear.bind(Object(v.a)(a)),a.options=function(){for(var e=[],t=2018;t>=1950;t--)e.push(n.a.createElement("option",{key:t},t));return e}(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"clearSearch",value:function(){this.setState({searchValue:"",year:""})}},{key:"selectYear",value:function(e){this.state.year!==e.target.value&&this.setState({year:e.target.value})}},{key:"searchMovie",value:function(){var e="&s=".concat(this.state.searchValue||'""',"&y=").concat(this.state.year);w.setCurrentQuery(e),this.props.dispatch(P("".concat(e,"&page=").concat(1)))}},{key:"render",value:function(){return n.a.createElement("div",{className:"search-bar"},n.a.createElement("input",{className:"search-input",onChange:this.handleChange,value:this.state.searchValue,type:"search"}),n.a.createElement("select",{className:"sort-select",onChange:this.selectYear,value:this.state.year},n.a.createElement("option",{defaultValue:!0},"ANY"),this.options),n.a.createElement("button",{className:"btn submit-btn",onClickCapture:this.searchMovie},"Search"),n.a.createElement("button",{className:"btn clear-btn",onClickCapture:this.clearSearch},"Reset"))}}]),t}(r.Component));N.defaultProps={};var S=Object(f.b)()(N),M=(a(69),a(70),a(71),function(e){return n.a.createElement("div",{className:"single-movie",onClickCapture:function(){return e.movieClicked(e.movie.imdbID)}},n.a.createElement("img",{className:"movie-poster",src:"N/A"===e.movie.Poster?"https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg":e.movie.Poster,alt:"poster"}),n.a.createElement("h3",{className:"movie-title"},e.movie.Title),n.a.createElement("p",{className:"movie-year"},e.movie.Year))});M.defaultProps={};var L=M,R=a(9),D=a.n(R),_=(a(72),n.a.forwardRef((function(e,t){return n.a.createElement("div",{ref:t,className:"movies-container"},e.movies.map((function(t){return n.a.createElement(L,{key:t.imdbID,movie:t,movieClicked:e.movieClicked})})))})));_.propTypes={movies:D.a.array.isRequired,movieClicked:D.a.func.isRequired},_.defaultProps={};var T=_,V=a(21);a(73);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var A=function(e){return function(t){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state={width:0,height:0},t}return Object(h.a)(a,t),Object(p.a)(a,[{key:"componentDidMount",value:function(){if(this.nodeRef){var e=i.findDOMNode(this.nodeRef),t=e.getBoundingClientRect();console.log(e),this.setState({width:t.width,height:t.height})}}},{key:"render",value:function(){var t=this,a={width:this.state.width,height:this.state.height},r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.props);return delete r.isLoading,this.props.isLoading?n.a.createElement("div",{className:"loading-container"},n.a.createElement("div",{className:"loading",style:a},n.a.createElement("div",{className:"circle circle-one"}),n.a.createElement("div",{className:"circle circle-two"}),n.a.createElement("div",{className:"circle circle-three"})),n.a.createElement(e,Object.assign({ref:function(e){return t.nodeRef=e}},r),"props.children")):n.a.createElement(e,Object.assign({ref:function(e){return t.nodeRef=e}},r),"props.children")}}]),a}(n.a.PureComponent)};A.defaultProps={isLoading:"false"};var I=A,Y=(a(74),function(e){return n.a.forwardRef((function(t,a){return t.errorMessage?n.a.createElement("div",{className:"error-box",ref:a},n.a.createElement("h2",null,"Error"),n.a.createElement("div",{className:"error-message"},t.errorMessage)):n.a.createElement(e,Object.assign({},t,{ref:a}),t.children)}))}),q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],isLoading:!1,errorMessage:""},a.fetchSingleMovie=a.fetchSingleMovie.bind(Object(v.a)(a)),a.loadableMovies=Y(T),a.errorableAndLoadable=I(a.loadableMovies),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"fetchSingleMovie",value:function(e){this.props.history.push("/movie/".concat(e)),this.props.dispatch(C(e))}},{key:"render",value:function(){var e=this.errorableAndLoadable;return n.a.createElement(e,{errorMessage:this.state.errorMessage,isLoading:this.state.isLoading,movies:this.state.movies,movieClicked:this.fetchSingleMovie})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e!==t?e:null}}]),t}(r.Component);q.defaultProps={};var B=Object(f.b)((function(e){var t=e.search,a=t.isLoading,r=t.data;return r?{isLoading:a,movies:r.movies?r.movies:[],isSuccessful:r.isSuccessful,errorMessage:r.errorMessage,totalResults:r.totalResults}:{isLoading:a,movies:[]}}))(q),Q=(a(75),a(76),function(e){return n.a.createElement("div",{className:"pagination"},function(t){if(0!==e.totalPages){var a=[],r=t<3?1:t-2,i=t+2+1>e.totalPages?e.totalPages:t+2+1;a.push(n.a.createElement("div",{className:"page-item previous ".concat(e.currentPage<=1?"disabled":""),key:"prev",onClickCapture:function(){return e.pageClicked(e.currentPage-1)}},"PREV")),r>1&&(a.push(n.a.createElement("div",{key:1,className:"page-item",onClickCapture:function(){return e.pageClicked(1)}},1)),a.push(n.a.createElement("div",{key:"space-before",className:"empty-space"},"...")));for(var s=function(r){a.push(n.a.createElement("div",{key:r,className:"page-item ".concat(r===t?"current-page":""),onClickCapture:function(){return e.pageClicked(r)}},r))},c=r;c<i;c++)s(c);return i<e.totalPages&&(a.push(n.a.createElement("div",{key:"space-after",className:"empty-space"},"...")),a.push(n.a.createElement("div",{key:e.totalPages,className:"page-item",onClickCapture:function(){return e.pageClicked(e.totalPages)}},e.totalPages))),a.push(n.a.createElement("div",{className:"page-item next ".concat(e.currentPage===e.totalPages?"disabled":""),key:"next",onClickCapture:function(){return e.pageClicked(e.currentPage+1)}},"NEXT")),a}}(e.currentPage))});Q.defaultProps={totalPages:0,currentPage:0};var F=Q;function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={currentPage:1,totalPages:0},a.pageClicked=a.pageClicked.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"pageClicked",value:function(e){this.state.currentPage!==e&&(this.props.dispatch(P(w.getCurrentQuery()+"&page="+e)),this.setState({currentPage:e}))}},{key:"render",value:function(){return n.a.createElement(F,{currentPage:this.state.currentPage,totalPages:this.state.totalPages,pageClicked:this.pageClicked})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.totalPages!==t.totalPages?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({currentPage:1},e):e!==t?e:null}}]),t}(r.Component);J.defaultProps={};var W=Object(f.b)((function(e){var t=e.search.data;return{totalPages:t.errorMessage?0:Math.ceil(Number(t.totalResults)/10)||0}}))(J),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(S,this.props),n.a.createElement(B,this.props),n.a.createElement(W,this.props))}}]),t}(r.Component);G.defaultProps={};var U=G,$=(a(77),n.a.forwardRef((function(e,t){var a=function(){var t=e.movie;if(t){var a=[];if(a.push(n.a.createElement("div",{key:"rating",className:"property-row title"},n.a.createElement("span",{className:"movie-property"}),t.Title)),t.Ratings&&t.Ratings[0]){var r=t.Ratings[0].Value;a.push(n.a.createElement("div",{key:"rating",className:"property-row"},n.a.createElement("span",{className:"movie-property"},"Rating: "),r))}for(var i in delete t.Ratings,delete t.Title,delete t.Response,delete t.imdbID,t)"N/A"!==t[i]&&"Poster"!==i&&t.hasOwnProperty(i)&&a.push(n.a.createElement("div",{key:i,className:"property-row"},n.a.createElement("span",{className:"movie-property"},i+": "),t[i]));return a}}();return n.a.createElement("div",{className:"single-movie-description",ref:t},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:"N/A"===e.movie.Poster?"https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg":e.movie.Poster,alt:"poster"})),n.a.createElement("div",{className:"movie-properties"},a))})));$.defaultProps={};var z=$,H=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={movie:{},isLoading:!1,errorText:""},a.loadableSingleMovie=I(z),a.errorableAndLoadable=Y(a.loadableSingleMovie),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.movieId=this.props.match.params.id,this.props.dispatch(C(this.movieId))}},{key:"render",value:function(){var e=this.errorableAndLoadable;return n.a.createElement(e,{errorMessage:this.state.errorText,movie:this.state.movie,isLoading:this.state.isLoading})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e!==t?e:null}}]),t}(r.Component);H.defaultProps={};var K=Object(f.b)((function(e){var t=e.singleMovieReducer,a=t.data;return{isLoading:t.isLoading,movie:a,errorText:a.Error}}))(H),Z=(a(78),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={},a.back=a.back.bind(Object(v.a)(a)),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"back",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return n.a.createElement("div",{className:"single-movie-page"},n.a.createElement("button",{className:"btn go-back",onClickCapture:this.back},"Go back"),n.a.createElement(K,this.props))}}]),t}(r.Component));Z.defaultProps={};var ee=Z;a(79),a(80);var te=function(){return n.a.createElement(c.a,{history:Object(l.a)(),basename:"/omdb"},n.a.createElement(o.a,{exact:!0,path:"/",component:U}),n.a.createElement(o.a,{path:"/movie/:id",component:ee}))},ae=a(16),re=a(39);a(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=Object(ae.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{isLoading:!0,data:e.data};case O:return{data:t.payload,isLoading:!1};default:return e}},singleMovieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{isLoading:!0,data:e.data};case E:return{data:t.data,isLoading:!1};default:return e}}}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,se=Object(ae.e)(ne,ie(Object(ae.a)(re.a)));s.a.render(n.a.createElement(f.a,{store:se},n.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.7dfe64a3.chunk.js.map