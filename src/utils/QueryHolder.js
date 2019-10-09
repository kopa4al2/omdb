const QueryHolder = (function () {

    let currentQuery = "";

    return {
        getCurrentQuery: () => currentQuery,
        setCurrentQuery: (query) => currentQuery = query
    }
})();
export default QueryHolder