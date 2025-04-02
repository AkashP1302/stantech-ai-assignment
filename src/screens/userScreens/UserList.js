import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../redux/userThunk";
import TableContainer from "../../components/Table/TableContainer";
import "../style/UserList.css";
import { userColumns } from "./userColumns";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`);
  };

  const renderCell = (item, col) => {
    if (col.key === "name") {
      return <span style={{ color: "blue" }}>{item[col.key]}</span>;
    }
    return item[col.key];
  };

  return (
    <div className="user-list-container">
      <h1 className="user-list-heading">User List</h1>

      {loading ? (
        <p className="user-list-message">Loading users...</p>
      ) : error ? (
        <p className="user-list-message error">{error}</p>
      ) : (
        <TableContainer
          columns={userColumns}
          data={users || []}
          onRowClick={handleRowClick}
          renderCell={renderCell}
        />
      )}
    </div>
  );
};

export default UserList;
