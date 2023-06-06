import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

function Paging({page, cnt, setPage}) {
    const [curPage, setCurPage] = useState(1);

    const handlePageChange = (t_page) => {
        setCurPage(t_page)
        setPage(t_page)
    };

    return (
        <Pagination
            activePage={curPage}
            itemsCountPerPage={10}
            totalItemsCount={cnt}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
        />
    );
};

export default Paging;