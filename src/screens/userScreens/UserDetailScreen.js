import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../../components/UserCard";
import { fetchUserById } from "../../redux/userThunk";

const UserDetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserById(id)).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [id, user, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <UserCard user={user} />
    </div>
  );
};

export default UserDetailScreen;
