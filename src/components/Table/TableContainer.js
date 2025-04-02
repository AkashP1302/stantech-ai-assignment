import React, { useState, useEffect } from "react";
import "../styles/Table.css";
import TableHeader from "./TableHeader";
import TableColumnHeader from "./TableColumnHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";

const TableContainer = ({
  columns,
  data: initialData,
  fetchData,
  pageSizeOptions = [5, 10, 20],
  noDataMessage = "No data found",
  onRowClick,
  renderCell,
  sortByDefaultKey,
  sortDirectionDefault = "asc",
}) => {
  const [data, setData] = useState(initialData || []);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: sortByDefaultKey || null,
    direction: sortDirectionDefault,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  // Fetch data when fetchData function is provided
  useEffect(() => {
    if (fetchData) {
      const getData = async () => {
        const result = await fetchData();
        setData(result);
      };
      getData();
    }
  }, [fetchData]);

  // Handles sorting logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    // Sorting data based on the selected column
    setData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  // Filters data based on search input
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <TableHeader search={search} setSearch={setSearch} />
      <table className="styled-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <TableColumnHeader
                key={col.key}
                col={col}
                sortConfig={sortConfig}
                handleSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <TableBody
          columns={columns}
          data={filteredData}
          currentPage={currentPage}
          pageSize={pageSize}
          noDataMessage={noDataMessage}
          onRowClick={onRowClick}
          renderCell={renderCell}
        />
      </table>
      <TablePagination
        totalItems={filteredData.length}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageSizeOptions={pageSizeOptions}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TableContainer;
