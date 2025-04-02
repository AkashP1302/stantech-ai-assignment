import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById, fetchUsers } from "./userThunk";

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get list slice
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      })

      // get user by id slice
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user by id";
      });
  },
});
export default userSlice.reducer;
