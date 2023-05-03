import React from "react";
import ReactPaginate from "react-paginate";


function Pagination({onChangePage}) {
	return (<ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={event=>onChangePage(event.selected + 1)}
        pageRangeDisplayed={12}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        />);
}

export default Pagination;
