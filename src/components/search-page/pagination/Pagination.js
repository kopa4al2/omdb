import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/search-page/pagination.css';

const Pagination = (props) => {

    //How much pages around the current page should be rendered
    const PAGE_OFFSET = 2;

    const renderPages = currentPage => {
            if (props.totalPages === 0)
                return;

            let pages = [];
            let startPage = currentPage < PAGE_OFFSET + 1 ? 1 : currentPage - PAGE_OFFSET;
            let endPage = currentPage + PAGE_OFFSET + 1 > props.totalPages ? props.totalPages : currentPage + PAGE_OFFSET + 1;

            pages.push(<div className={`page-item previous ${props.currentPage <= 1 ? 'disabled' : ''}`}
                            key="prev"
                            onClickCapture={() => props.pageClicked(props.currentPage - 1)}>
                PREV
            </div>);

            if (startPage > 1) {
                pages.push(<div key={1} className="page-item"
                                onClickCapture={() => props.pageClicked(1)}>
                    {1}
                </div>);
                pages.push(<div key={"space-before"} className="empty-space">{"..."}</div>);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <div key={i}
                         className={`page-item ${i === currentPage ? 'current-page' : ''}`}
                         onClickCapture={() => props.pageClicked(i)}>
                        {i}
                    </div>
                )
            }

            if (endPage < props.totalPages) {
                pages.push(<div key={"space-after"} className="empty-space">{"..."}</div>);
                pages.push(
                    <div key={props.totalPages} className="page-item"
                         onClickCapture={() => props.pageClicked(props.totalPages)}>
                        {props.totalPages}
                    </div>
                );
            }

            pages.push(<div className={`page-item next ${props.currentPage === props.totalPages ? 'disabled' : ''}`}
                            key="next"
                            onClickCapture={() => props.pageClicked(props.currentPage + 1)}>
                NEXT
            </div>);
            return pages;
        }
    ;

    return (
        <div className="pagination">
            {
                renderPages(props.currentPage)
            }
        </div>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    pageClicked: PropTypes.func.isRequired
};

Pagination.defaultProps = {
    totalPages: 0,
    currentPage: 0
};


export default Pagination;