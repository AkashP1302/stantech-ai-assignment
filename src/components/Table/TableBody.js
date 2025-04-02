import React from "react";

const TableBody = ({
  columns,
  data,
  currentPage,
  pageSize,
  noDataMessage,
  onRowClick,
  renderCell,
}) => {
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <tbody>
      {paginatedData.length > 0 ? (
        paginatedData.map((item, index) => (
          <tr
            key={index}
            className="custom-row"
            onClick={() => onRowClick && onRowClick(item)}
          >
            {columns.map((col) => (
              <td key={col.key}>
                {renderCell ? renderCell(item, col) : item[col.key]}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length}>{noDataMessage}</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
