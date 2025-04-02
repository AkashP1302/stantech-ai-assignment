import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import UserList from "../screens/userScreens/UserList";
import UserDetailScreen from "../screens/userScreens/UserDetailScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetailScreen />} />
      </Switch>
    </Router>
  );
};

export default Routes;
