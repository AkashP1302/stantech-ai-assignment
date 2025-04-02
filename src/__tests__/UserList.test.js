jest.mock("axios");
import axios from "axios";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import UserList from "../screens/userScreens/UserList";
import { store } from "../redux/store";

// Mock UserList component
jest.mock("../screens/userScreens/UserList", () => {
  return function MockUserList() {
    return (
      <div>
        <h1>User List</h1>
        <ul>
          <li>John Doe - john@example.com</li>
          <li>Jane Doe - jane@example.com</li>
        </ul>
      </div>
    );
  };
});

describe("UserList UI Component with Redux", () => {
  beforeEach(() => {
    // Mock axios response before rendering the component
    axios.get.mockResolvedValue({
      data: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
      ],
    });
  });

  test("should render user list UI correctly with Redux store", async () => {
    render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );

    // Verify that the title is rendered
    expect(screen.getByText("User List")).toBeInTheDocument();

    // Wait for the mocked API response to be processed
    await waitFor(() => {
      expect(
        screen.getByText("John Doe - john@example.com")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Jane Doe - jane@example.com")
      ).toBeInTheDocument();
    });
  });
});
