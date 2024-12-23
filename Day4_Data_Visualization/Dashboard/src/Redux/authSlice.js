import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Currently logged-in user
  registeredUsers: [], // Array to store registered users
  error: null, // Error message
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
      state.error = null;
    },
  },
});

export const { setUser, logout, setError, registerUser } = authSlice.actions;
export default authSlice.reducer;
