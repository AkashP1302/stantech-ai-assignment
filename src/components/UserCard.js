import React from "react";
import "./styles/UserCard.css";
import { FaBuilding, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2>User Details</h2>
      </div>
      <div className="user-card-body">
        <div className="user-info">
          <h3>
            <FaUser className="icon" /> User
          </h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>

        {/* Address Section */}
        <div className="user-address">
          <h3>
            <FaMapMarkerAlt className="icon" /> Address
          </h3>
          <p>
            <strong>Street:</strong> {user.address.street}
          </p>
          <p>
            <strong>Suite:</strong> {user.address.suite}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.address.zipcode}
          </p>
          <p>
            <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
            {user.address.geo.lng}
          </p>
        </div>

        {/* Company Section */}
        <div className="user-company">
          <h3>
            <FaBuilding className="icon" /> Company
          </h3>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
          <p>
            <strong>BS:</strong> {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
