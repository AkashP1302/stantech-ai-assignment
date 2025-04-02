import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TablePagination = ({
  totalItems,
  pageSize,
  setPageSize,
  pageSizeOptions,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="pagination-container">
      <select
        className="page-size"
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>

      <div className="pagination-buttons">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <FaArrowLeft />
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
