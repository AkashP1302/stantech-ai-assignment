import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch user list
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

// Fetch user by id
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  }
);
