import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  registeredUsers: [],
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user"); // Remove from localStorage on logout
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
