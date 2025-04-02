import React from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const TableColumnHeader = ({ col, sortConfig, handleSort }) => {
  return (
    <th className="table-cell-header" onClick={() => handleSort(col.key)}>
      {col.label}
      {sortConfig.key === col.key ? (
        sortConfig.direction === "asc" ? (
          <FaSortUp className="sort-icon" />
        ) : (
          <FaSortDown className="sort-icon" />
        )
      ) : (
        <FaSortUp className="sort-icon inactive" />
      )}
    </th>
  );
};

export default TableColumnHeader;
