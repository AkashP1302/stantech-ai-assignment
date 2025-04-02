import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../redux/store";

test("renders user list heading", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/User List/i)).toBeInTheDocument();
});
