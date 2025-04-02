import React, { useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

const TableHeader = ({ search, setSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  const handleFilterClick = () => {
    setShowSearch(!showSearch);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 0);
  };
  return (
    <div className="table-header">
      <button className="filter-btn" onClick={handleFilterClick}>
        <FaFilter className={showSearch ? "active-filter" : ""} />
      </button>

      {showSearch && (
        <input
          ref={searchInputRef}
          type="text"
          className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </div>
  );
};

export default TableHeader;
